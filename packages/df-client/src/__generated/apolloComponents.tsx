export type Maybe<T> = T | null;

export interface UserWhereInput {
  AND?: Maybe<(Maybe<UserWhereInput>)[]>;

  OR?: Maybe<(Maybe<UserWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  email_i?: Maybe<string>;

  email_not_i?: Maybe<string>;

  email_contains_i?: Maybe<string>;

  email_not_contains_i?: Maybe<string>;

  email_starts_with_i?: Maybe<string>;

  email_not_starts_with_i?: Maybe<string>;

  email_ends_with_i?: Maybe<string>;

  email_not_ends_with_i?: Maybe<string>;

  email_in?: Maybe<(Maybe<string>)[]>;

  email_not_in?: Maybe<(Maybe<string>)[]>;

  password_is_set?: Maybe<boolean>;

  isAdmin?: Maybe<boolean>;

  isAdmin_not?: Maybe<boolean>;

  isBusiness?: Maybe<boolean>;

  isBusiness_not?: Maybe<boolean>;

  favoriteFood?: Maybe<string>;

  favoriteFood_not?: Maybe<string>;

  favoriteFood_contains?: Maybe<string>;

  favoriteFood_not_contains?: Maybe<string>;

  favoriteFood_starts_with?: Maybe<string>;

  favoriteFood_not_starts_with?: Maybe<string>;

  favoriteFood_ends_with?: Maybe<string>;

  favoriteFood_not_ends_with?: Maybe<string>;

  favoriteFood_i?: Maybe<string>;

  favoriteFood_not_i?: Maybe<string>;

  favoriteFood_contains_i?: Maybe<string>;

  favoriteFood_not_contains_i?: Maybe<string>;

  favoriteFood_starts_with_i?: Maybe<string>;

  favoriteFood_not_starts_with_i?: Maybe<string>;

  favoriteFood_ends_with_i?: Maybe<string>;

  favoriteFood_not_ends_with_i?: Maybe<string>;

  favoriteFood_in?: Maybe<(Maybe<string>)[]>;

  favoriteFood_not_in?: Maybe<(Maybe<string>)[]>;

  twitterHandle?: Maybe<string>;

  twitterHandle_not?: Maybe<string>;

  twitterHandle_contains?: Maybe<string>;

  twitterHandle_not_contains?: Maybe<string>;

  twitterHandle_starts_with?: Maybe<string>;

  twitterHandle_not_starts_with?: Maybe<string>;

  twitterHandle_ends_with?: Maybe<string>;

  twitterHandle_not_ends_with?: Maybe<string>;

  twitterHandle_i?: Maybe<string>;

  twitterHandle_not_i?: Maybe<string>;

  twitterHandle_contains_i?: Maybe<string>;

  twitterHandle_not_contains_i?: Maybe<string>;

  twitterHandle_starts_with_i?: Maybe<string>;

  twitterHandle_not_starts_with_i?: Maybe<string>;

  twitterHandle_ends_with_i?: Maybe<string>;

  twitterHandle_not_ends_with_i?: Maybe<string>;

  twitterHandle_in?: Maybe<(Maybe<string>)[]>;

  twitterHandle_not_in?: Maybe<(Maybe<string>)[]>;

  yelpUrl?: Maybe<string>;

  yelpUrl_not?: Maybe<string>;

  yelpUrl_contains?: Maybe<string>;

  yelpUrl_not_contains?: Maybe<string>;

  yelpUrl_starts_with?: Maybe<string>;

  yelpUrl_not_starts_with?: Maybe<string>;

  yelpUrl_ends_with?: Maybe<string>;

  yelpUrl_not_ends_with?: Maybe<string>;

  yelpUrl_i?: Maybe<string>;

  yelpUrl_not_i?: Maybe<string>;

  yelpUrl_contains_i?: Maybe<string>;

  yelpUrl_not_contains_i?: Maybe<string>;

  yelpUrl_starts_with_i?: Maybe<string>;

  yelpUrl_not_starts_with_i?: Maybe<string>;

  yelpUrl_ends_with_i?: Maybe<string>;

  yelpUrl_not_ends_with_i?: Maybe<string>;

  yelpUrl_in?: Maybe<(Maybe<string>)[]>;

  yelpUrl_not_in?: Maybe<(Maybe<string>)[]>;

  username?: Maybe<string>;

  username_not?: Maybe<string>;

  username_contains?: Maybe<string>;

  username_not_contains?: Maybe<string>;

  username_starts_with?: Maybe<string>;

  username_not_starts_with?: Maybe<string>;

  username_ends_with?: Maybe<string>;

  username_not_ends_with?: Maybe<string>;

  username_i?: Maybe<string>;

  username_not_i?: Maybe<string>;

  username_contains_i?: Maybe<string>;

  username_not_contains_i?: Maybe<string>;

  username_starts_with_i?: Maybe<string>;

  username_not_starts_with_i?: Maybe<string>;

  username_ends_with_i?: Maybe<string>;

  username_not_ends_with_i?: Maybe<string>;

  username_in?: Maybe<(Maybe<string>)[]>;

  username_not_in?: Maybe<(Maybe<string>)[]>;

  googleId?: Maybe<string>;

  googleId_not?: Maybe<string>;

  googleId_contains?: Maybe<string>;

  googleId_not_contains?: Maybe<string>;

  googleId_starts_with?: Maybe<string>;

  googleId_not_starts_with?: Maybe<string>;

  googleId_ends_with?: Maybe<string>;

  googleId_not_ends_with?: Maybe<string>;

  googleId_i?: Maybe<string>;

  googleId_not_i?: Maybe<string>;

  googleId_contains_i?: Maybe<string>;

  googleId_not_contains_i?: Maybe<string>;

  googleId_starts_with_i?: Maybe<string>;

  googleId_not_starts_with_i?: Maybe<string>;

  googleId_ends_with_i?: Maybe<string>;

  googleId_not_ends_with_i?: Maybe<string>;

  googleId_in?: Maybe<(Maybe<string>)[]>;

  googleId_not_in?: Maybe<(Maybe<string>)[]>;

  facebookId?: Maybe<string>;

  facebookId_not?: Maybe<string>;

  facebookId_contains?: Maybe<string>;

  facebookId_not_contains?: Maybe<string>;

  facebookId_starts_with?: Maybe<string>;

  facebookId_not_starts_with?: Maybe<string>;

  facebookId_ends_with?: Maybe<string>;

  facebookId_not_ends_with?: Maybe<string>;

  facebookId_i?: Maybe<string>;

  facebookId_not_i?: Maybe<string>;

  facebookId_contains_i?: Maybe<string>;

  facebookId_not_contains_i?: Maybe<string>;

  facebookId_starts_with_i?: Maybe<string>;

  facebookId_not_starts_with_i?: Maybe<string>;

  facebookId_ends_with_i?: Maybe<string>;

  facebookId_not_ends_with_i?: Maybe<string>;

  facebookId_in?: Maybe<(Maybe<string>)[]>;

  facebookId_not_in?: Maybe<(Maybe<string>)[]>;

  userSlug?: Maybe<string>;

  userSlug_not?: Maybe<string>;

  userSlug_contains?: Maybe<string>;

  userSlug_not_contains?: Maybe<string>;

  userSlug_starts_with?: Maybe<string>;

  userSlug_not_starts_with?: Maybe<string>;

  userSlug_ends_with?: Maybe<string>;

  userSlug_not_ends_with?: Maybe<string>;

  userSlug_i?: Maybe<string>;

  userSlug_not_i?: Maybe<string>;

  userSlug_contains_i?: Maybe<string>;

  userSlug_not_contains_i?: Maybe<string>;

  userSlug_starts_with_i?: Maybe<string>;

  userSlug_not_starts_with_i?: Maybe<string>;

  userSlug_ends_with_i?: Maybe<string>;

  userSlug_not_ends_with_i?: Maybe<string>;

  userSlug_in?: Maybe<(Maybe<string>)[]>;

  userSlug_not_in?: Maybe<(Maybe<string>)[]>;

  image?: Maybe<string>;

  image_not?: Maybe<string>;

  image_contains?: Maybe<string>;

  image_not_contains?: Maybe<string>;

  image_starts_with?: Maybe<string>;

  image_not_starts_with?: Maybe<string>;

  image_ends_with?: Maybe<string>;

  image_not_ends_with?: Maybe<string>;

  image_in?: Maybe<(Maybe<string>)[]>;

  image_not_in?: Maybe<(Maybe<string>)[]>;

  lastLogin?: Maybe<string>;

  lastLogin_not?: Maybe<string>;

  lastLogin_lt?: Maybe<string>;

  lastLogin_lte?: Maybe<string>;

  lastLogin_gt?: Maybe<string>;

  lastLogin_gte?: Maybe<string>;

  lastLogin_in?: Maybe<(Maybe<string>)[]>;

  lastLogin_not_in?: Maybe<(Maybe<string>)[]>;
  /** condition must be true for all nodes */
  managingBusinesses_every?: Maybe<BusinessWhereInput>;
  /** condition must be true for at least 1 node */
  managingBusinesses_some?: Maybe<BusinessWhereInput>;
  /** condition must be false for all nodes */
  managingBusinesses_none?: Maybe<BusinessWhereInput>;
  /** is the relation field null */
  managingBusinesses_is_null?: Maybe<boolean>;
  /** condition must be true for all nodes */
  backing_every?: Maybe<BusinessWhereInput>;
  /** condition must be true for at least 1 node */
  backing_some?: Maybe<BusinessWhereInput>;
  /** condition must be false for all nodes */
  backing_none?: Maybe<BusinessWhereInput>;
  /** is the relation field null */
  backing_is_null?: Maybe<boolean>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface BusinessWhereInput {
  AND?: Maybe<(Maybe<BusinessWhereInput>)[]>;

  OR?: Maybe<(Maybe<BusinessWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  description_i?: Maybe<string>;

  description_not_i?: Maybe<string>;

  description_contains_i?: Maybe<string>;

  description_not_contains_i?: Maybe<string>;

  description_starts_with_i?: Maybe<string>;

  description_not_starts_with_i?: Maybe<string>;

  description_ends_with_i?: Maybe<string>;

  description_not_ends_with_i?: Maybe<string>;

  description_in?: Maybe<(Maybe<string>)[]>;

  description_not_in?: Maybe<(Maybe<string>)[]>;

  owner?: Maybe<UserWhereInput>;

  owner_is_null?: Maybe<boolean>;
  /** condition must be true for all nodes */
  staffMembers_every?: Maybe<StaffNameWhereInput>;
  /** condition must be true for at least 1 node */
  staffMembers_some?: Maybe<StaffNameWhereInput>;
  /** condition must be false for all nodes */
  staffMembers_none?: Maybe<StaffNameWhereInput>;
  /** is the relation field null */
  staffMembers_is_null?: Maybe<boolean>;

  profileImage?: Maybe<string>;

  profileImage_not?: Maybe<string>;

  profileImage_contains?: Maybe<string>;

  profileImage_not_contains?: Maybe<string>;

  profileImage_starts_with?: Maybe<string>;

  profileImage_not_starts_with?: Maybe<string>;

  profileImage_ends_with?: Maybe<string>;

  profileImage_not_ends_with?: Maybe<string>;

  profileImage_in?: Maybe<(Maybe<string>)[]>;

  profileImage_not_in?: Maybe<(Maybe<string>)[]>;

  heroImage?: Maybe<string>;

  heroImage_not?: Maybe<string>;

  heroImage_contains?: Maybe<string>;

  heroImage_not_contains?: Maybe<string>;

  heroImage_starts_with?: Maybe<string>;

  heroImage_not_starts_with?: Maybe<string>;

  heroImage_ends_with?: Maybe<string>;

  heroImage_not_ends_with?: Maybe<string>;

  heroImage_in?: Maybe<(Maybe<string>)[]>;

  heroImage_not_in?: Maybe<(Maybe<string>)[]>;

  themeColor?: Maybe<string>;

  themeColor_not?: Maybe<string>;

  themeColor_contains?: Maybe<string>;

  themeColor_not_contains?: Maybe<string>;

  themeColor_starts_with?: Maybe<string>;

  themeColor_not_starts_with?: Maybe<string>;

  themeColor_ends_with?: Maybe<string>;

  themeColor_not_ends_with?: Maybe<string>;

  themeColor_i?: Maybe<string>;

  themeColor_not_i?: Maybe<string>;

  themeColor_contains_i?: Maybe<string>;

  themeColor_not_contains_i?: Maybe<string>;

  themeColor_starts_with_i?: Maybe<string>;

  themeColor_not_starts_with_i?: Maybe<string>;

  themeColor_ends_with_i?: Maybe<string>;

  themeColor_not_ends_with_i?: Maybe<string>;

  themeColor_in?: Maybe<(Maybe<string>)[]>;

  themeColor_not_in?: Maybe<(Maybe<string>)[]>;

  location?: Maybe<string>;

  location_not?: Maybe<string>;

  location_contains?: Maybe<string>;

  location_not_contains?: Maybe<string>;

  location_starts_with?: Maybe<string>;

  location_not_starts_with?: Maybe<string>;

  location_ends_with?: Maybe<string>;

  location_not_ends_with?: Maybe<string>;

  location_in?: Maybe<(Maybe<string>)[]>;

  location_not_in?: Maybe<(Maybe<string>)[]>;

  businessSlug?: Maybe<string>;

  businessSlug_not?: Maybe<string>;

  businessSlug_contains?: Maybe<string>;

  businessSlug_not_contains?: Maybe<string>;

  businessSlug_starts_with?: Maybe<string>;

  businessSlug_not_starts_with?: Maybe<string>;

  businessSlug_ends_with?: Maybe<string>;

  businessSlug_not_ends_with?: Maybe<string>;

  businessSlug_i?: Maybe<string>;

  businessSlug_not_i?: Maybe<string>;

  businessSlug_contains_i?: Maybe<string>;

  businessSlug_not_contains_i?: Maybe<string>;

  businessSlug_starts_with_i?: Maybe<string>;

  businessSlug_not_starts_with_i?: Maybe<string>;

  businessSlug_ends_with_i?: Maybe<string>;

  businessSlug_not_ends_with_i?: Maybe<string>;

  businessSlug_in?: Maybe<(Maybe<string>)[]>;

  businessSlug_not_in?: Maybe<(Maybe<string>)[]>;
  /** condition must be true for all nodes */
  backers_every?: Maybe<UserWhereInput>;
  /** condition must be true for at least 1 node */
  backers_some?: Maybe<UserWhereInput>;
  /** condition must be false for all nodes */
  backers_none?: Maybe<UserWhereInput>;
  /** is the relation field null */
  backers_is_null?: Maybe<boolean>;

  status?: Maybe<BusinessStatusType>;

  status_not?: Maybe<BusinessStatusType>;

  status_in?: Maybe<(Maybe<BusinessStatusType>)[]>;

  status_not_in?: Maybe<(Maybe<BusinessStatusType>)[]>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface StaffNameWhereInput {
  AND?: Maybe<(Maybe<StaffNameWhereInput>)[]>;

  OR?: Maybe<(Maybe<StaffNameWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  position?: Maybe<string>;

  position_not?: Maybe<string>;

  position_contains?: Maybe<string>;

  position_not_contains?: Maybe<string>;

  position_starts_with?: Maybe<string>;

  position_not_starts_with?: Maybe<string>;

  position_ends_with?: Maybe<string>;

  position_not_ends_with?: Maybe<string>;

  position_i?: Maybe<string>;

  position_not_i?: Maybe<string>;

  position_contains_i?: Maybe<string>;

  position_not_contains_i?: Maybe<string>;

  position_starts_with_i?: Maybe<string>;

  position_not_starts_with_i?: Maybe<string>;

  position_ends_with_i?: Maybe<string>;

  position_not_ends_with_i?: Maybe<string>;

  position_in?: Maybe<(Maybe<string>)[]>;

  position_not_in?: Maybe<(Maybe<string>)[]>;

  useraccount?: Maybe<UserWhereInput>;

  useraccount_is_null?: Maybe<boolean>;

  photo?: Maybe<string>;

  photo_not?: Maybe<string>;

  photo_contains?: Maybe<string>;

  photo_not_contains?: Maybe<string>;

  photo_starts_with?: Maybe<string>;

  photo_not_starts_with?: Maybe<string>;

  photo_ends_with?: Maybe<string>;

  photo_not_ends_with?: Maybe<string>;

  photo_in?: Maybe<(Maybe<string>)[]>;

  photo_not_in?: Maybe<(Maybe<string>)[]>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}
/** Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference). All options are strings as they ultimately end up in a URL. */
export interface CloudinaryImageFormat {
  prettyName?: Maybe<string>;

  width?: Maybe<string>;

  height?: Maybe<string>;

  crop?: Maybe<string>;

  aspect_ratio?: Maybe<string>;

  gravity?: Maybe<string>;

  zoom?: Maybe<string>;

  x?: Maybe<string>;

  y?: Maybe<string>;

  format?: Maybe<string>;

  fetch_format?: Maybe<string>;

  quality?: Maybe<string>;

  radius?: Maybe<string>;

  angle?: Maybe<string>;

  effect?: Maybe<string>;

  opacity?: Maybe<string>;

  border?: Maybe<string>;

  background?: Maybe<string>;

  overlay?: Maybe<string>;

  underlay?: Maybe<string>;

  default_image?: Maybe<string>;

  delay?: Maybe<string>;

  color?: Maybe<string>;

  color_space?: Maybe<string>;

  dpr?: Maybe<string>;

  page?: Maybe<string>;

  density?: Maybe<string>;

  flags?: Maybe<string>;

  transformation?: Maybe<string>;
}

export interface UserWhereUniqueInput {
  id: string;
}

export interface BusinessWhereUniqueInput {
  id: string;
}

export interface OfferingWhereInput {
  AND?: Maybe<(Maybe<OfferingWhereInput>)[]>;

  OR?: Maybe<(Maybe<OfferingWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  details?: Maybe<string>;

  details_not?: Maybe<string>;

  details_contains?: Maybe<string>;

  details_not_contains?: Maybe<string>;

  details_starts_with?: Maybe<string>;

  details_not_starts_with?: Maybe<string>;

  details_ends_with?: Maybe<string>;

  details_not_ends_with?: Maybe<string>;

  details_i?: Maybe<string>;

  details_not_i?: Maybe<string>;

  details_contains_i?: Maybe<string>;

  details_not_contains_i?: Maybe<string>;

  details_starts_with_i?: Maybe<string>;

  details_not_starts_with_i?: Maybe<string>;

  details_ends_with_i?: Maybe<string>;

  details_not_ends_with_i?: Maybe<string>;

  details_in?: Maybe<(Maybe<string>)[]>;

  details_not_in?: Maybe<(Maybe<string>)[]>;

  status?: Maybe<OfferingStatusType>;

  status_not?: Maybe<OfferingStatusType>;

  status_in?: Maybe<(Maybe<OfferingStatusType>)[]>;

  status_not_in?: Maybe<(Maybe<OfferingStatusType>)[]>;

  business?: Maybe<BusinessWhereInput>;

  business_is_null?: Maybe<boolean>;

  price?: Maybe<string>;

  price_not?: Maybe<string>;

  price_lt?: Maybe<string>;

  price_lte?: Maybe<string>;

  price_gt?: Maybe<string>;

  price_gte?: Maybe<string>;

  price_in?: Maybe<(Maybe<string>)[]>;

  price_not_in?: Maybe<(Maybe<string>)[]>;

  currency?: Maybe<string>;

  currency_not?: Maybe<string>;

  currency_contains?: Maybe<string>;

  currency_not_contains?: Maybe<string>;

  currency_starts_with?: Maybe<string>;

  currency_not_starts_with?: Maybe<string>;

  currency_ends_with?: Maybe<string>;

  currency_not_ends_with?: Maybe<string>;

  currency_i?: Maybe<string>;

  currency_not_i?: Maybe<string>;

  currency_contains_i?: Maybe<string>;

  currency_not_contains_i?: Maybe<string>;

  currency_starts_with_i?: Maybe<string>;

  currency_not_starts_with_i?: Maybe<string>;

  currency_ends_with_i?: Maybe<string>;

  currency_not_ends_with_i?: Maybe<string>;

  currency_in?: Maybe<(Maybe<string>)[]>;

  currency_not_in?: Maybe<(Maybe<string>)[]>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  description_i?: Maybe<string>;

  description_not_i?: Maybe<string>;

  description_contains_i?: Maybe<string>;

  description_not_contains_i?: Maybe<string>;

  description_starts_with_i?: Maybe<string>;

  description_not_starts_with_i?: Maybe<string>;

  description_ends_with_i?: Maybe<string>;

  description_not_ends_with_i?: Maybe<string>;

  description_in?: Maybe<(Maybe<string>)[]>;

  description_not_in?: Maybe<(Maybe<string>)[]>;

  maxSlots?: Maybe<number>;

  maxSlots_not?: Maybe<number>;

  maxSlots_lt?: Maybe<number>;

  maxSlots_lte?: Maybe<number>;

  maxSlots_gt?: Maybe<number>;

  maxSlots_gte?: Maybe<number>;

  maxSlots_in?: Maybe<(Maybe<number>)[]>;

  maxSlots_not_in?: Maybe<(Maybe<number>)[]>;

  iAvailable?: Maybe<boolean>;

  iAvailable_not?: Maybe<boolean>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface OfferingWhereUniqueInput {
  id: string;
}

export interface PurchaseWhereInput {
  AND?: Maybe<(Maybe<PurchaseWhereInput>)[]>;

  OR?: Maybe<(Maybe<PurchaseWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  item?: Maybe<OfferingWhereInput>;

  item_is_null?: Maybe<boolean>;

  business?: Maybe<BusinessWhereInput>;

  business_is_null?: Maybe<boolean>;

  user?: Maybe<UserWhereInput>;

  user_is_null?: Maybe<boolean>;
}

export interface PurchaseWhereUniqueInput {
  id: string;
}

export interface StaffNameWhereUniqueInput {
  id: string;
}

export interface ForgottenPasswordTokenWhereInput {
  AND?: Maybe<(Maybe<ForgottenPasswordTokenWhereInput>)[]>;

  OR?: Maybe<(Maybe<ForgottenPasswordTokenWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  user?: Maybe<UserWhereInput>;

  user_is_null?: Maybe<boolean>;

  token?: Maybe<string>;

  token_not?: Maybe<string>;

  token_contains?: Maybe<string>;

  token_not_contains?: Maybe<string>;

  token_starts_with?: Maybe<string>;

  token_not_starts_with?: Maybe<string>;

  token_ends_with?: Maybe<string>;

  token_not_ends_with?: Maybe<string>;

  token_i?: Maybe<string>;

  token_not_i?: Maybe<string>;

  token_contains_i?: Maybe<string>;

  token_not_contains_i?: Maybe<string>;

  token_starts_with_i?: Maybe<string>;

  token_not_starts_with_i?: Maybe<string>;

  token_ends_with_i?: Maybe<string>;

  token_not_ends_with_i?: Maybe<string>;

  token_in?: Maybe<(Maybe<string>)[]>;

  token_not_in?: Maybe<(Maybe<string>)[]>;

  requestedAt?: Maybe<DateTime>;

  requestedAt_not?: Maybe<DateTime>;

  requestedAt_lt?: Maybe<DateTime>;

  requestedAt_lte?: Maybe<DateTime>;

  requestedAt_gt?: Maybe<DateTime>;

  requestedAt_gte?: Maybe<DateTime>;

  requestedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  requestedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  accessedAt?: Maybe<DateTime>;

  accessedAt_not?: Maybe<DateTime>;

  accessedAt_lt?: Maybe<DateTime>;

  accessedAt_lte?: Maybe<DateTime>;

  accessedAt_gt?: Maybe<DateTime>;

  accessedAt_gte?: Maybe<DateTime>;

  accessedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  accessedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  expiresAt?: Maybe<DateTime>;

  expiresAt_not?: Maybe<DateTime>;

  expiresAt_lt?: Maybe<DateTime>;

  expiresAt_lte?: Maybe<DateTime>;

  expiresAt_gt?: Maybe<DateTime>;

  expiresAt_gte?: Maybe<DateTime>;

  expiresAt_in?: Maybe<(Maybe<DateTime>)[]>;

  expiresAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface ForgottenPasswordTokenWhereUniqueInput {
  id: string;
}

export interface BlockContentWhereInput {
  AND?: Maybe<(Maybe<BlockContentWhereInput>)[]>;

  OR?: Maybe<(Maybe<BlockContentWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  title_i?: Maybe<string>;

  title_not_i?: Maybe<string>;

  title_contains_i?: Maybe<string>;

  title_not_contains_i?: Maybe<string>;

  title_starts_with_i?: Maybe<string>;

  title_not_starts_with_i?: Maybe<string>;

  title_ends_with_i?: Maybe<string>;

  title_not_ends_with_i?: Maybe<string>;

  title_in?: Maybe<(Maybe<string>)[]>;

  title_not_in?: Maybe<(Maybe<string>)[]>;

  subtitle?: Maybe<string>;

  subtitle_not?: Maybe<string>;

  subtitle_contains?: Maybe<string>;

  subtitle_not_contains?: Maybe<string>;

  subtitle_starts_with?: Maybe<string>;

  subtitle_not_starts_with?: Maybe<string>;

  subtitle_ends_with?: Maybe<string>;

  subtitle_not_ends_with?: Maybe<string>;

  subtitle_i?: Maybe<string>;

  subtitle_not_i?: Maybe<string>;

  subtitle_contains_i?: Maybe<string>;

  subtitle_not_contains_i?: Maybe<string>;

  subtitle_starts_with_i?: Maybe<string>;

  subtitle_not_starts_with_i?: Maybe<string>;

  subtitle_ends_with_i?: Maybe<string>;

  subtitle_not_ends_with_i?: Maybe<string>;

  subtitle_in?: Maybe<(Maybe<string>)[]>;

  subtitle_not_in?: Maybe<(Maybe<string>)[]>;

  hero?: Maybe<string>;

  hero_not?: Maybe<string>;

  hero_contains?: Maybe<string>;

  hero_not_contains?: Maybe<string>;

  hero_starts_with?: Maybe<string>;

  hero_not_starts_with?: Maybe<string>;

  hero_ends_with?: Maybe<string>;

  hero_not_ends_with?: Maybe<string>;

  hero_in?: Maybe<(Maybe<string>)[]>;

  hero_not_in?: Maybe<(Maybe<string>)[]>;

  image?: Maybe<string>;

  image_not?: Maybe<string>;

  image_contains?: Maybe<string>;

  image_not_contains?: Maybe<string>;

  image_starts_with?: Maybe<string>;

  image_not_starts_with?: Maybe<string>;

  image_ends_with?: Maybe<string>;

  image_not_ends_with?: Maybe<string>;

  image_in?: Maybe<(Maybe<string>)[]>;

  image_not_in?: Maybe<(Maybe<string>)[]>;

  textContent?: Maybe<string>;

  textContent_not?: Maybe<string>;

  textContent_contains?: Maybe<string>;

  textContent_not_contains?: Maybe<string>;

  textContent_starts_with?: Maybe<string>;

  textContent_not_starts_with?: Maybe<string>;

  textContent_ends_with?: Maybe<string>;

  textContent_not_ends_with?: Maybe<string>;

  textContent_i?: Maybe<string>;

  textContent_not_i?: Maybe<string>;

  textContent_contains_i?: Maybe<string>;

  textContent_not_contains_i?: Maybe<string>;

  textContent_starts_with_i?: Maybe<string>;

  textContent_not_starts_with_i?: Maybe<string>;

  textContent_ends_with_i?: Maybe<string>;

  textContent_not_ends_with_i?: Maybe<string>;

  textContent_in?: Maybe<(Maybe<string>)[]>;

  textContent_not_in?: Maybe<(Maybe<string>)[]>;

  richContent?: Maybe<string>;

  richContent_not?: Maybe<string>;

  richContent_contains?: Maybe<string>;

  richContent_not_contains?: Maybe<string>;

  richContent_starts_with?: Maybe<string>;

  richContent_not_starts_with?: Maybe<string>;

  richContent_ends_with?: Maybe<string>;

  richContent_not_ends_with?: Maybe<string>;

  richContent_i?: Maybe<string>;

  richContent_not_i?: Maybe<string>;

  richContent_contains_i?: Maybe<string>;

  richContent_not_contains_i?: Maybe<string>;

  richContent_starts_with_i?: Maybe<string>;

  richContent_not_starts_with_i?: Maybe<string>;

  richContent_ends_with_i?: Maybe<string>;

  richContent_not_ends_with_i?: Maybe<string>;

  richContent_in?: Maybe<(Maybe<string>)[]>;

  richContent_not_in?: Maybe<(Maybe<string>)[]>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface BlockContentWhereUniqueInput {
  id: string;
}

export interface ContentPageWhereInput {
  AND?: Maybe<(Maybe<ContentPageWhereInput>)[]>;

  OR?: Maybe<(Maybe<ContentPageWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  name_i?: Maybe<string>;

  name_not_i?: Maybe<string>;

  name_contains_i?: Maybe<string>;

  name_not_contains_i?: Maybe<string>;

  name_starts_with_i?: Maybe<string>;

  name_not_starts_with_i?: Maybe<string>;

  name_ends_with_i?: Maybe<string>;

  name_not_ends_with_i?: Maybe<string>;

  name_in?: Maybe<(Maybe<string>)[]>;

  name_not_in?: Maybe<(Maybe<string>)[]>;

  slug?: Maybe<string>;

  slug_not?: Maybe<string>;

  slug_contains?: Maybe<string>;

  slug_not_contains?: Maybe<string>;

  slug_starts_with?: Maybe<string>;

  slug_not_starts_with?: Maybe<string>;

  slug_ends_with?: Maybe<string>;

  slug_not_ends_with?: Maybe<string>;

  slug_i?: Maybe<string>;

  slug_not_i?: Maybe<string>;

  slug_contains_i?: Maybe<string>;

  slug_not_contains_i?: Maybe<string>;

  slug_starts_with_i?: Maybe<string>;

  slug_not_starts_with_i?: Maybe<string>;

  slug_ends_with_i?: Maybe<string>;

  slug_not_ends_with_i?: Maybe<string>;

  slug_in?: Maybe<(Maybe<string>)[]>;

  slug_not_in?: Maybe<(Maybe<string>)[]>;

  status?: Maybe<ContentPageStatusType>;

  status_not?: Maybe<ContentPageStatusType>;

  status_in?: Maybe<(Maybe<ContentPageStatusType>)[]>;

  status_not_in?: Maybe<(Maybe<ContentPageStatusType>)[]>;
  /** condition must be true for all nodes */
  blocks_every?: Maybe<BlockContentWhereInput>;
  /** condition must be true for at least 1 node */
  blocks_some?: Maybe<BlockContentWhereInput>;
  /** condition must be false for all nodes */
  blocks_none?: Maybe<BlockContentWhereInput>;
  /** is the relation field null */
  blocks_is_null?: Maybe<boolean>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  updatedAt_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  createdAt_in?: Maybe<(Maybe<DateTime>)[]>;

  createdAt_not_in?: Maybe<(Maybe<DateTime>)[]>;

  updatedBy?: Maybe<UserWhereInput>;

  updatedBy_is_null?: Maybe<boolean>;

  createdBy?: Maybe<UserWhereInput>;

  createdBy_is_null?: Maybe<boolean>;
}

export interface ContentPageWhereUniqueInput {
  id: string;
}

export interface PassportSessionWhereInput {
  AND?: Maybe<(Maybe<PassportSessionWhereInput>)[]>;

  OR?: Maybe<(Maybe<PassportSessionWhereInput>)[]>;

  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<(Maybe<string>)[]>;

  id_not_in?: Maybe<(Maybe<string>)[]>;

  service?: Maybe<string>;

  service_not?: Maybe<string>;

  service_contains?: Maybe<string>;

  service_not_contains?: Maybe<string>;

  service_starts_with?: Maybe<string>;

  service_not_starts_with?: Maybe<string>;

  service_ends_with?: Maybe<string>;

  service_not_ends_with?: Maybe<string>;

  service_i?: Maybe<string>;

  service_not_i?: Maybe<string>;

  service_contains_i?: Maybe<string>;

  service_not_contains_i?: Maybe<string>;

  service_starts_with_i?: Maybe<string>;

  service_not_starts_with_i?: Maybe<string>;

  service_ends_with_i?: Maybe<string>;

  service_not_ends_with_i?: Maybe<string>;

  service_in?: Maybe<(Maybe<string>)[]>;

  service_not_in?: Maybe<(Maybe<string>)[]>;

  serviceUserId?: Maybe<string>;

  serviceUserId_not?: Maybe<string>;

  serviceUserId_contains?: Maybe<string>;

  serviceUserId_not_contains?: Maybe<string>;

  serviceUserId_starts_with?: Maybe<string>;

  serviceUserId_not_starts_with?: Maybe<string>;

  serviceUserId_ends_with?: Maybe<string>;

  serviceUserId_not_ends_with?: Maybe<string>;

  serviceUserId_i?: Maybe<string>;

  serviceUserId_not_i?: Maybe<string>;

  serviceUserId_contains_i?: Maybe<string>;

  serviceUserId_not_contains_i?: Maybe<string>;

  serviceUserId_starts_with_i?: Maybe<string>;

  serviceUserId_not_starts_with_i?: Maybe<string>;

  serviceUserId_ends_with_i?: Maybe<string>;

  serviceUserId_not_ends_with_i?: Maybe<string>;

  serviceUserId_in?: Maybe<(Maybe<string>)[]>;

  serviceUserId_not_in?: Maybe<(Maybe<string>)[]>;

  tokenSecret?: Maybe<string>;

  tokenSecret_not?: Maybe<string>;

  tokenSecret_contains?: Maybe<string>;

  tokenSecret_not_contains?: Maybe<string>;

  tokenSecret_starts_with?: Maybe<string>;

  tokenSecret_not_starts_with?: Maybe<string>;

  tokenSecret_ends_with?: Maybe<string>;

  tokenSecret_not_ends_with?: Maybe<string>;

  tokenSecret_i?: Maybe<string>;

  tokenSecret_not_i?: Maybe<string>;

  tokenSecret_contains_i?: Maybe<string>;

  tokenSecret_not_contains_i?: Maybe<string>;

  tokenSecret_starts_with_i?: Maybe<string>;

  tokenSecret_not_starts_with_i?: Maybe<string>;

  tokenSecret_ends_with_i?: Maybe<string>;

  tokenSecret_not_ends_with_i?: Maybe<string>;

  tokenSecret_in?: Maybe<(Maybe<string>)[]>;

  tokenSecret_not_in?: Maybe<(Maybe<string>)[]>;

  refreshToken?: Maybe<string>;

  refreshToken_not?: Maybe<string>;

  refreshToken_contains?: Maybe<string>;

  refreshToken_not_contains?: Maybe<string>;

  refreshToken_starts_with?: Maybe<string>;

  refreshToken_not_starts_with?: Maybe<string>;

  refreshToken_ends_with?: Maybe<string>;

  refreshToken_not_ends_with?: Maybe<string>;

  refreshToken_i?: Maybe<string>;

  refreshToken_not_i?: Maybe<string>;

  refreshToken_contains_i?: Maybe<string>;

  refreshToken_not_contains_i?: Maybe<string>;

  refreshToken_starts_with_i?: Maybe<string>;

  refreshToken_not_starts_with_i?: Maybe<string>;

  refreshToken_ends_with_i?: Maybe<string>;

  refreshToken_not_ends_with_i?: Maybe<string>;

  refreshToken_in?: Maybe<(Maybe<string>)[]>;

  refreshToken_not_in?: Maybe<(Maybe<string>)[]>;

  item?: Maybe<UserWhereInput>;

  item_is_null?: Maybe<boolean>;
}

export interface PassportSessionWhereUniqueInput {
  id: string;
}

export interface UserCreateInput {
  name?: Maybe<string>;

  email?: Maybe<string>;

  password?: Maybe<string>;

  isAdmin?: Maybe<boolean>;

  isBusiness?: Maybe<boolean>;

  favoriteFood?: Maybe<string>;

  twitterHandle?: Maybe<string>;

  yelpUrl?: Maybe<string>;

  username?: Maybe<string>;

  googleId?: Maybe<string>;

  facebookId?: Maybe<string>;

  userSlug?: Maybe<string>;

  image?: Maybe<Upload>;

  lastLogin?: Maybe<string>;

  managingBusinesses?: Maybe<BusinessRelateToManyInput>;

  backing?: Maybe<BusinessRelateToManyInput>;
}

export interface BusinessRelateToManyInput {
  create?: Maybe<(Maybe<BusinessCreateInput>)[]>;

  connect?: Maybe<(Maybe<BusinessWhereUniqueInput>)[]>;

  disconnect?: Maybe<(Maybe<BusinessWhereUniqueInput>)[]>;

  disconnectAll?: Maybe<boolean>;
}

export interface BusinessCreateInput {
  name?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<UserRelateToOneInput>;

  staffMembers?: Maybe<StaffNameRelateToManyInput>;

  profileImage?: Maybe<Upload>;

  heroImage?: Maybe<Upload>;

  themeColor?: Maybe<string>;

  location?: Maybe<string>;

  businessSlug?: Maybe<string>;

  backers?: Maybe<UserRelateToManyInput>;

  status?: Maybe<BusinessStatusType>;
}

export interface UserRelateToOneInput {
  create?: Maybe<UserCreateInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  disconnect?: Maybe<UserWhereUniqueInput>;

  disconnectAll?: Maybe<boolean>;
}

export interface StaffNameRelateToManyInput {
  create?: Maybe<(Maybe<StaffNameCreateInput>)[]>;

  connect?: Maybe<(Maybe<StaffNameWhereUniqueInput>)[]>;

  disconnect?: Maybe<(Maybe<StaffNameWhereUniqueInput>)[]>;

  disconnectAll?: Maybe<boolean>;
}

export interface StaffNameCreateInput {
  name?: Maybe<string>;

  position?: Maybe<string>;

  useraccount?: Maybe<UserRelateToOneInput>;

  photo?: Maybe<Upload>;
}

export interface UserRelateToManyInput {
  create?: Maybe<(Maybe<UserCreateInput>)[]>;

  connect?: Maybe<(Maybe<UserWhereUniqueInput>)[]>;

  disconnect?: Maybe<(Maybe<UserWhereUniqueInput>)[]>;

  disconnectAll?: Maybe<boolean>;
}

export interface UsersCreateInput {
  data?: Maybe<UserCreateInput>;
}

export interface UserUpdateInput {
  name?: Maybe<string>;

  email?: Maybe<string>;

  password?: Maybe<string>;

  isAdmin?: Maybe<boolean>;

  isBusiness?: Maybe<boolean>;

  favoriteFood?: Maybe<string>;

  twitterHandle?: Maybe<string>;

  yelpUrl?: Maybe<string>;

  username?: Maybe<string>;

  googleId?: Maybe<string>;

  facebookId?: Maybe<string>;

  userSlug?: Maybe<string>;

  image?: Maybe<Upload>;

  lastLogin?: Maybe<string>;

  managingBusinesses?: Maybe<BusinessRelateToManyInput>;

  backing?: Maybe<BusinessRelateToManyInput>;
}

export interface UsersUpdateInput {
  id: string;

  data?: Maybe<UserUpdateInput>;
}

export interface BusinessesCreateInput {
  data?: Maybe<BusinessCreateInput>;
}

export interface BusinessUpdateInput {
  name?: Maybe<string>;

  description?: Maybe<string>;

  owner?: Maybe<UserRelateToOneInput>;

  staffMembers?: Maybe<StaffNameRelateToManyInput>;

  profileImage?: Maybe<Upload>;

  heroImage?: Maybe<Upload>;

  themeColor?: Maybe<string>;

  location?: Maybe<string>;

  businessSlug?: Maybe<string>;

  backers?: Maybe<UserRelateToManyInput>;

  status?: Maybe<BusinessStatusType>;
}

export interface BusinessesUpdateInput {
  id: string;

  data?: Maybe<BusinessUpdateInput>;
}

export interface OfferingCreateInput {
  name?: Maybe<string>;

  details?: Maybe<string>;

  status?: Maybe<OfferingStatusType>;

  business?: Maybe<BusinessRelateToOneInput>;

  price?: Maybe<string>;

  currency?: Maybe<string>;

  description?: Maybe<string>;

  maxSlots?: Maybe<number>;

  iAvailable?: Maybe<boolean>;
}

export interface BusinessRelateToOneInput {
  create?: Maybe<BusinessCreateInput>;

  connect?: Maybe<BusinessWhereUniqueInput>;

  disconnect?: Maybe<BusinessWhereUniqueInput>;

  disconnectAll?: Maybe<boolean>;
}

export interface OfferingsCreateInput {
  data?: Maybe<OfferingCreateInput>;
}

export interface OfferingUpdateInput {
  name?: Maybe<string>;

  details?: Maybe<string>;

  status?: Maybe<OfferingStatusType>;

  business?: Maybe<BusinessRelateToOneInput>;

  price?: Maybe<string>;

  currency?: Maybe<string>;

  description?: Maybe<string>;

  maxSlots?: Maybe<number>;

  iAvailable?: Maybe<boolean>;
}

export interface OfferingsUpdateInput {
  id: string;

  data?: Maybe<OfferingUpdateInput>;
}

export interface PurchaseCreateInput {
  item?: Maybe<OfferingRelateToOneInput>;

  business?: Maybe<BusinessRelateToOneInput>;

  user?: Maybe<UserRelateToOneInput>;
}

export interface OfferingRelateToOneInput {
  create?: Maybe<OfferingCreateInput>;

  connect?: Maybe<OfferingWhereUniqueInput>;

  disconnect?: Maybe<OfferingWhereUniqueInput>;

  disconnectAll?: Maybe<boolean>;
}

export interface PurchasesCreateInput {
  data?: Maybe<PurchaseCreateInput>;
}

export interface PurchaseUpdateInput {
  item?: Maybe<OfferingRelateToOneInput>;

  business?: Maybe<BusinessRelateToOneInput>;

  user?: Maybe<UserRelateToOneInput>;
}

export interface PurchasesUpdateInput {
  id: string;

  data?: Maybe<PurchaseUpdateInput>;
}

export interface StaffNamesCreateInput {
  data?: Maybe<StaffNameCreateInput>;
}

export interface StaffNameUpdateInput {
  name?: Maybe<string>;

  position?: Maybe<string>;

  useraccount?: Maybe<UserRelateToOneInput>;

  photo?: Maybe<Upload>;
}

export interface StaffNamesUpdateInput {
  id: string;

  data?: Maybe<StaffNameUpdateInput>;
}

export interface ForgottenPasswordTokenCreateInput {
  user?: Maybe<UserRelateToOneInput>;

  token?: Maybe<string>;

  requestedAt?: Maybe<DateTime>;

  accessedAt?: Maybe<DateTime>;

  expiresAt?: Maybe<DateTime>;
}

export interface ForgottenPasswordTokensCreateInput {
  data?: Maybe<ForgottenPasswordTokenCreateInput>;
}

export interface ForgottenPasswordTokenUpdateInput {
  user?: Maybe<UserRelateToOneInput>;

  token?: Maybe<string>;

  requestedAt?: Maybe<DateTime>;

  accessedAt?: Maybe<DateTime>;

  expiresAt?: Maybe<DateTime>;
}

export interface ForgottenPasswordTokensUpdateInput {
  id: string;

  data?: Maybe<ForgottenPasswordTokenUpdateInput>;
}

export interface BlockContentCreateInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  subtitle?: Maybe<string>;

  hero?: Maybe<Upload>;

  image?: Maybe<Upload>;

  textContent?: Maybe<string>;

  richContent?: Maybe<string>;
}

export interface BlockContentsCreateInput {
  data?: Maybe<BlockContentCreateInput>;
}

export interface BlockContentUpdateInput {
  name?: Maybe<string>;

  title?: Maybe<string>;

  subtitle?: Maybe<string>;

  hero?: Maybe<Upload>;

  image?: Maybe<Upload>;

  textContent?: Maybe<string>;

  richContent?: Maybe<string>;
}

export interface BlockContentsUpdateInput {
  id: string;

  data?: Maybe<BlockContentUpdateInput>;
}

export interface ContentPageCreateInput {
  name?: Maybe<string>;

  slug?: Maybe<string>;

  status?: Maybe<ContentPageStatusType>;

  blocks?: Maybe<BlockContentRelateToManyInput>;
}

export interface BlockContentRelateToManyInput {
  create?: Maybe<(Maybe<BlockContentCreateInput>)[]>;

  connect?: Maybe<(Maybe<BlockContentWhereUniqueInput>)[]>;

  disconnect?: Maybe<(Maybe<BlockContentWhereUniqueInput>)[]>;

  disconnectAll?: Maybe<boolean>;
}

export interface ContentPagesCreateInput {
  data?: Maybe<ContentPageCreateInput>;
}

export interface ContentPageUpdateInput {
  name?: Maybe<string>;

  slug?: Maybe<string>;

  status?: Maybe<ContentPageStatusType>;

  blocks?: Maybe<BlockContentRelateToManyInput>;
}

export interface ContentPagesUpdateInput {
  id: string;

  data?: Maybe<ContentPageUpdateInput>;
}

export interface PassportSessionCreateInput {
  service?: Maybe<string>;

  serviceUserId?: Maybe<string>;

  tokenSecret?: Maybe<string>;

  refreshToken?: Maybe<string>;

  item?: Maybe<UserRelateToOneInput>;
}

export interface PassportSessionsCreateInput {
  data?: Maybe<PassportSessionCreateInput>;
}

export interface PassportSessionUpdateInput {
  service?: Maybe<string>;

  serviceUserId?: Maybe<string>;

  tokenSecret?: Maybe<string>;

  refreshToken?: Maybe<string>;

  item?: Maybe<UserRelateToOneInput>;
}

export interface PassportSessionsUpdateInput {
  id: string;

  data?: Maybe<PassportSessionUpdateInput>;
}

export enum BusinessStatusType {
  Active = 'active',
  Closed = 'closed',
  Limited = 'limited',
  Takeout = 'takeout',
}

export enum OfferingStatusType {
  Draft = 'draft',
  Active = 'active',
}

export enum ContentPageStatusType {
  Draft = 'draft',
  Published = 'published',
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

/** DateTime custom scalar represents an ISO 8601 datetime string */
export type DateTime = any;

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type Json = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [],
  },
};

export default result;
