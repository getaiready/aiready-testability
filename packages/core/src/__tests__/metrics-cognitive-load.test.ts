import { describe, it, expect } from 'vitest';
import { calculateCognitiveLoad } from '../metrics/cognitive-load';

describe('Cognitive Load Metric', () => {
  it('should calculate low cognitive load for small files', () => {
    const result = calculateCognitiveLoad({
      linesOfCode: 20,
      exportCount: 1,
      importCount: 1,
      uniqueConcepts: 2,
    });

    expect(result.score).toBeLessThan(20);
    expect(result.rating).toBe('trivial');
  });

  it('should calculate high cognitive load for complex files', () => {
    const result = calculateCognitiveLoad({
      linesOfCode: 500,
      exportCount: 20,
      importCount: 15,
      uniqueConcepts: 50,
    });

    expect(result.score).toBeGreaterThan(60);
    expect(['difficult', 'expert']).toContain(result.rating);
  });
});
