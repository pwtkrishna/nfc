export type StepConfig = {
  key: string | number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  render: () => React.ReactNode;
};
