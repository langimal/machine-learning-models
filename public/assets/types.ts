// types.ts

// Enum for model types
enum ModelType {
  Regression,
  Classification,
  Clustering,
  DimensionalityReduction
}

// Interface for model metadata
interface ModelMetadata {
  name: string;
  type: ModelType;
  description: string;
  version: string;
  author: string;
}

// Interface for model inputs
interface ModelInputs {
  [key: string]: number[] | string[] | boolean[];
}

// Interface for model outputs
interface ModelOutputs {
  [key: string]: number[] | string[] | boolean[];
}

// Interface for model configuration
interface ModelConfig {
  epochs: number;
  learningRate: number;
  batchSize: number;
  optimizer: string;
}

// Type for model implementation
type ModelImplementation = (
  inputs: ModelInputs,
  config: ModelConfig
) => ModelOutputs;