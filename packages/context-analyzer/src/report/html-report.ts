import { analyzeContext } from '../orchestrator';
import { generateSummary } from '../summary';
import {
  generateIssueSummary,
  generateTable,
  generateStandardHtmlReport,
} from '@aiready/core';

/**
 * Generate HTML report
 */
export function generateHTMLReport(
  summary: ReturnType<typeof generateSummary>,
  results: Awaited<ReturnType<typeof analyzeContext>>
): string {
  const totalIssues =
    summary.criticalIssues + summary.majorIssues + summary.minorIssues;
  void results;

  const stats = [
    { value: summary.totalFiles, label: 'Files Analyzed' },
    { value: summary.totalTokens.toLocaleString(), label: 'Total Tokens' },
    { value: summary.avgContextBudget.toFixed(0), label: 'Avg Context Budget' },
    {
      value: totalIssues,
      label: 'Total Issues',
      color: totalIssues > 0 ? '#f39c12' : undefined,
    },
  ];

  const sections: any[] = [];
  if (totalIssues > 0) {
    sections.push({
      title: '⚠️ Issues Summary',
      content: generateIssueSummary(
        summary.criticalIssues,
        summary.majorIssues,
        summary.minorIssues,
        summary.totalPotentialSavings
      ),
    });
  }

  if (summary.fragmentedModules.length > 0) {
    sections.push({
      title: '🧩 Fragmented Modules',
      content: generateTable({
        headers: ['Domain', 'Files', 'Fragmentation', 'Token Cost'],
        rows: summary.fragmentedModules.map((m) => [
          m.domain,
          String(m.files.length),
          `${(m.fragmentationScore * 100).toFixed(0)}%`,
          m.totalTokens.toLocaleString(),
        ]),
      }),
    });
  }

  if (summary.topExpensiveFiles.length > 0) {
    sections.push({
      title: '💸 Most Expensive Files',
      content: generateTable({
        headers: ['File', 'Context Budget', 'Severity'],
        rows: summary.topExpensiveFiles.map((f) => [
          f.file,
          `${f.contextBudget.toLocaleString()} tokens`,
          `<span class="issue-${f.severity}">${f.severity.toUpperCase()}</span>`,
        ]),
      }),
    });
  }

  return generateStandardHtmlReport(
    {
      title: 'Context Analysis Report',
      packageName: 'context-analyzer',
      packageUrl: 'https://github.com/getaiready/aiready-context-analyzer',
      bugUrl: 'https://github.com/getaiready/aiready-context-analyzer/issues',
      emoji: '🧠',
    },
    stats,
    sections
  );
}
