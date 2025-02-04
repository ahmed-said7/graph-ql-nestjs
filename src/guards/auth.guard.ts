import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
// import { console } from 'inspector';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    // Access the GraphQL context directly
    const ctx = GqlExecutionContext.create(context).getContext();
    console.log('headers logs =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(ctx.headers);
    console.log(ctx.args);
    return true; // replace with actual authentication logic here
  }
}
