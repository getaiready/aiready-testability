import { describe, it, expect } from 'vitest';
import { calculateDependencyHealth } from '../metrics/dependency-health';

describe('Dependency Health Metric', () => {
  it('should calculate excellent health for modern packages', () => {
    const result = calculateDependencyHealth({
      totalPackages: 10,
      outdatedPackages: 0,
      deprecatedPackages: 0,
      trainingCutoffSkew: 0.1,
    });

    expect(result.score).toBeGreaterThan(90);
    expect(result.rating).toBe('excellent');
    expect(result.aiKnowledgeConfidence).toBe('high');
  });

  it('should calculate hazardous health for deprecated/old packages', () => {
    const result = calculateDependencyHealth({
      totalPackages: 10,
      outdatedPackages: 8,
      deprecatedPackages: 5,
      trainingCutoffSkew: 0.9,
    });

    expect(result.score).toBeLessThan(30);
    expect(result.rating).toBe('hazardous');
    expect(result.aiKnowledgeConfidence).toBe('blind');
  });
});
