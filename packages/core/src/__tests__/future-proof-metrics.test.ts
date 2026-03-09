import { describe, it, expect } from 'vitest';
import { calculateFutureProofScore } from '../future-proof-metrics';

describe('Future-Proof Metrics', () => {
  it('should calculate aggregate score correctly', () => {
    const params = {
      cognitiveLoad: { score: 20, rating: 'low', components: {} } as any,
      patternEntropy: {
        entropy: 0.2,
        rating: 'low',
        recommendations: [],
      } as any,
      conceptCohesion: { score: 0.8, rating: 'good' } as any,
    };

    const result = calculateFutureProofScore(params);

    // loadScore = 100 - 20 = 80
    // entropyScore = 100 - 0.2*100 = 80
    // cohesionScore = 0.8*100 = 80
    // overall = 80*0.4 + 80*0.3 + 80*0.3 = 32 + 24 + 24 = 80
    expect(result.score).toBe(80);
    expect(result.factors).toHaveLength(3);
  });
});
