import { describe, it, expect, vi } from 'vitest';
import { getWasmPath } from '../parsers/tree-sitter-utils';
import * as fs from 'fs';

vi.mock('fs', async () => {
  const actual = await vi.importActual('fs');
  return {
    ...actual,
    existsSync: vi.fn(),
  };
});

describe('Tree-sitter Utils', () => {
  describe('getWasmPath', () => {
    it('should return null if wasm file not found', () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);
      const path = getWasmPath('nonexistent');
      expect(path).toBeNull();
    });

    it('should find wasm file if it exists in immediate paths', () => {
      vi.mocked(fs.existsSync).mockImplementation((p: any) =>
        p.toString().endsWith('tree-sitter-java.wasm')
      );
      const path = getWasmPath('java');
      expect(path).toContain('tree-sitter-java.wasm');
    });
  });
});
