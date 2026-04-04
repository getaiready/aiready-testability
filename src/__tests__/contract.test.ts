import { describe, it, expect, vi } from 'vitest';
import { TESTABILITY_PROVIDER } from '../provider';
import { validateSpokeOutput } from '@aiready/core';

// Mock core functions to avoid actual FS access
vi.mock('@aiready/core', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@aiready/core')>();
  return {
    ...actual,
    scanFiles: vi.fn().mockResolvedValue(['file1.ts', 'file1.test.ts']),
    readFileContent: vi.fn().mockImplementation((file) => {
      if (file === 'file1.ts') return 'export const x = 1;';
      if (file === 'file1.test.ts')
        return 'import { x } from "./file1"; test("x", () => expect(x).toBe(1));';
      return '';
    }),
  };
});

describe('Testability Contract Validation', () => {
  it('should produce output matching the SpokeOutput contract', async () => {
    const options = {
      rootDir: './test',
    };

    const output = await TESTABILITY_PROVIDER.analyze(options);

    // 1. Structural Validation
    const validation = validateSpokeOutput('testability', output);
    if (!validation.valid) {
      console.error('Contract Validation Errors:', validation.errors);
    }
    expect(validation.valid).toBe(true);

    // 2. Scoring Validation
    const score = TESTABILITY_PROVIDER.score(output, options);
    expect(score).toBeDefined();
    expect(typeof score.score).toBe('number');
    expect(score.score).toBeGreaterThanOrEqual(0);
    expect(score.score).toBeLessThanOrEqual(100);
  });
});
