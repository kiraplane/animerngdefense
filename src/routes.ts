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

  // Anime RNG Defense wiki routes
  Guides = '/guides',
  Codes = '/codes',
  Units = '/units',
  Traits = '/traits',
  TierList = '/tier-list',
  Teams = '/teams',
  Maps = '/maps',
  Summons = '/summons',
  Download = '/download',
  Updates = '/updates',
  Tools = '/tools',
  TeamBuilder = '/tools/team-builder',
  LuckPlanner = '/tools/luck-planner',
  RollTracker = '/tools/roll-tracker',
  Database = '/database',
  DatabaseUnits = '/database/units',
  DatabaseRewards = '/database/rewards',
  DatabaseTeams = '/database/teams',
  DatabaseMaps = '/database/maps',
  BeginnerGuide = '/guides/beginner-guide',
  CodesRedeemGuide = '/guides/codes-redeem-guide',
  UnitTierListGuide = '/guides/unit-tier-list-guide',
  TraitsRerollGuide = '/guides/traits-reroll-guide',
  TeamBuildingGuide = '/guides/team-building-guide',
  MapsWavesGuide = '/guides/maps-waves-guide',
  LuckBoostsGuide = '/guides/luck-boosts-guide',
  JjkUpdateGuide = '/guides/jjk-update-guide',
  AfkUnitsGuide = '/guides/afk-units-guide',
  NameConfusionGuide = '/guides/name-confusion-guide',

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
