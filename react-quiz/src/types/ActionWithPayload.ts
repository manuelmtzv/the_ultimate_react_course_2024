export type ActionWithPayload<Type extends string, Payload> = {
  type: Type;
  payload: Payload;
};
