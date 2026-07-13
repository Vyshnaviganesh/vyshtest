import { test } from '@playwright/test';

interface TestOptions {
  testId: string;
  priority: string;
  author: string;
  group: string[];
  title: string;
}

function vyshtestpractice(options: TestOptions, testFn: Parameters<typeof test>[2]) {
  test(
    options.title,
    {
      tag: [`@${options.testId}`, ...options.group.map(g => `@${g}`)],
      annotation: [
        { type: 'TestID',   description: options.testId },
        { type: 'Priority', description: options.priority },
        { type: 'Author',   description: options.author },
        { type: 'Group',    description: options.group.join(', ') },
      ],
    },
    testFn,
  );
}

vyshtestpractice.describe = test.describe;

export { vyshtestpractice };
