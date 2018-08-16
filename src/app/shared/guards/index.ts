import { IsAuthorizedGuard } from './is-authorized.guard';
import { AlreadyLoggedInGuard } from './aleady-logged-in.guard';

export const guards = [
  IsAuthorizedGuard,
  AlreadyLoggedInGuard
];

export {
  IsAuthorizedGuard,
  AlreadyLoggedInGuard
}
