import { describe, it, expect } from 'vitest';
import { calculateChangeAmplification } from '../metrics/change-amplification';

describe('Change Amplification Metric', () => {
  it('should calculate isolated score for no coupling', () => {
    const result = calculateChangeAmplification({
      files: [
        { file: 'a.ts', fanOut: 0, fanIn: 0 },
        { file: 'b.ts', fanOut: 0, fanIn: 0 },
      ],
    });

    expect(result.score).toBeGreaterThan(90);
    expect(result.rating).toBe('isolated');
  });

  it('should calculate explosive score for high coupling', () => {
    const result = calculateChangeAmplification({
      files: [
        { file: 'hub.ts', fanOut: 50, fanIn: 50 },
        { file: 'leaf.ts', fanOut: 1, fanIn: 0 },
      ],
    });

    expect(result.score).toBeLessThan(40);
    expect(result.rating).toBe('explosive');
    expect(result.recommendations[0]).toContain('hotspot');
  });
});
