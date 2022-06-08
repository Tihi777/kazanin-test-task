import { ActionCreatorWithPayload, ActionCreatorWithPreparedPayload, createAction } from '@reduxjs/toolkit';

type MainTriAction<TPayload = any, TKey extends string = string> = ActionCreatorWithPreparedPayload<[payload: TPayload], TPayload, TKey>;

type NextTriAction<TPayload = any, TKey extends string = string> = ActionCreatorWithPayload<TPayload, TKey>;

export interface TriActionDef<
  TAction = any,
  TResult = any,
  TError = any,
  T extends string = string,
  TResultType extends string = string,
  TErrorType extends string = string
> {
  base: MainTriAction<TAction, T>;
  successAction: NextTriAction<TResult, TResultType>;
  failureAction: NextTriAction<TError, TErrorType>;
}

function createIds<T extends string = string>(baseId: T) {
  return {
    base: `${baseId} 📤 (init)` as const,
    success: `${baseId} ✔ (success)` as const,
    failure: `${baseId} ❌ (failed)` as const,
  };
}

export function createTriAction<TAction = void, TResult = void, TError = any, T extends string = string>(baseId: T) {
  const ids = createIds(baseId);
  return {
    base: createAction(ids.base, (payload: TAction) => ({ payload })),
    successAction: createAction<TResult & { actionId: string }>(ids.success),
    failureAction: createAction<TError & { actionId: string }>(ids.failure),
  } as TriActionDef<TAction, TResult, TError, typeof ids.base, typeof ids.success, typeof ids.failure>;
}
