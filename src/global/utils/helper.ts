import axios, { AxiosError } from 'axios';
import moment from 'moment';

interface IResponseError extends Error {
  message: string;
  error: string;
  errors?: { [key: string]: Array<string> };
}

export function ErrorType(err: AxiosError<IResponseError>) {
  if (err.response) {
    return (
      (err.response.data?.errors &&
        err.response.data?.errors[
          Object.keys(err.response.data.errors)[0]
        ][0]) ||
      err.response.data?.message ||
      err.response.data?.error ||
      'Response Error'
    );
  } else if (err.request) {
    return 'Bad Request';
  } else return err.message;
}

export function ApiErrorType(
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  error: AxiosError<IResponseError> | Error | unknown
) {
  if (axios.isAxiosError(error)) {
    return ErrorType(error as AxiosError<IResponseError>);
  } else return (error as Error)?.message || (error as string);
}
