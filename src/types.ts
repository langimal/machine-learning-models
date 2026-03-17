// types.ts

interface DataPoint {
  id: string;
  label: string;
  features: number[];
}

interface MLModel {
  train(dataPoints: DataPoint[]): void;
  predict(features: number[]): number;
}

interface RegressionModel extends MLModel {
  getConfidence(): number;
  getMeanSquaredError(): number;
}

interface ClassificationModel extends MLModel {
  getAccuracy(): number;
  getConfusionMatrix(): number[][];
}

interface NeuralNetworkModel extends RegressionModel, ClassificationModel {}

declare namespace machineLearningModels {
  export { DataPoint, MLModel, RegressionModel, ClassificationModel, NeuralNetworkModel };
}