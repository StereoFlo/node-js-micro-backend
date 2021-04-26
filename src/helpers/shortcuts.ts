export const resOK = (data: any) => ({
  success: true,
  data: data,
});

export const resError = (message: string) => ({
  success: false,
  message: message,
});
