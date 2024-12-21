// class ApiError extends Error {
//   constructor(
//     statusCode,
//     message = "Something went wrong",
//     errors = [],
//     stack = ""
//   ) {
//     super(message);
//     (this.statusCode = statusCode), (this.data = null);
//     this.message = message;
//     this.message = message;
//     this.success = false;
//     this.errors = errors;

//     if (stack) {
//       this.stack = stack;
//     } else {
//       Error.captureStackTrace(this, this.constructor);
//     }
//   }
// }
// export default ApiError;
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    data,
    errors =[],
    stack =""
  ) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
