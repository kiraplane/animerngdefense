import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Ice Tycoon 2 wiki routes
  Guides = '/guides',
  Codes = '/codes',
  Secrets = '/secrets',
  Rebirths = '/rebirths',
  Items = '/items',
  Badges = '/badges',
  Download = '/download',
  Updates = '/updates',
  BeginnerGuide = '/guides/beginner-guide',
  CodesGuide = '/guides/codes-status-guide',
  MoneyGuide = '/guides/best-upgrades-money-guide',
  GemsGuide = '/guides/all-gems-locations-guide',
  SecretsGuide = '/guides/all-secrets-guide',
  TrophiesGuide = '/guides/all-trophies-guide',
  RebirthGuide = '/guides/rebirth-requirements-guide',
  ItemsGuide = '/guides/items-and-water-capacity-guide',
  BadgesGuide = '/guides/badges-and-endings-guide',
  WrongGameGuide = '/guides/original-vs-ice-tycoon-2-codes-guide',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
