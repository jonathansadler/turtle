import config from 'turtle/config';

export const QUEUE_URL = (priority: string) => (config.sqs.queues as any)[priority][config.platform];
