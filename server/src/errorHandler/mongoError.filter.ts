// import {
//   ArgumentsHost,
//   BadRequestException,
//   Catch,
//   ConflictException,
//   ExceptionFilter,
// } from '@nestjs/common';
// import { MongoError } from 'mongodb';

// @Catch(MongoError)
// export class MongoExceptionFilter implements ExceptionFilter {
//   catch(exception: any, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse();
//     const error = {
//       statusCode: 400,
//       createdBy: 'MONGO_SERVER_ERROR',
//     };

//     switch (exception.code) {
//       case 11000:
//         const keys = Object.keys(exception.keyPattern);
//         return response.status(400).json({
//           ...error,
//           message: `${keys?.join()} should be unique`,
//         });
//     }
//   }
// }
