import { ErrorInfo } from 'react';

// Define the type for the error boundary callback function
export type IErrorBoundary = (error: Error, info: ErrorInfo) => void;

export type MixedType =
  | string
  | boolean
  | number
  | object
  | Array<object | string | number>;
