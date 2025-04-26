import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiBlogPostBlogPost extends Struct.CollectionTypeSchema {
  collectionName: 'blog_posts';
  info: {
    description: '';
    displayName: 'BlogPost';
    pluralName: 'blog-posts';
    singularName: 'blog-post';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    Value: Schema.Attribute.Component<'content-tools.tag-item', true>;
  };
}

export interface ApiCountryFishSpecieCountryFishSpecie
  extends Struct.CollectionTypeSchema {
  collectionName: 'country_fish_species';
  info: {
    displayName: 'Country Fish Species';
    pluralName: 'country-fish-species';
    singularName: 'country-fish-specie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    BaitsandLures: Schema.Attribute.Component<
      'baitsand-lures.baits-and-lures',
      true
    >;
    Body: Schema.Attribute.Blocks;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fishing_instructors: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_spots: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-spot.fishing-spot'
    >;
    Groundbaits: Schema.Attribute.Component<'groundbaits.groundbaits', true>;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    Intro: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country-fish-specie.country-fish-specie'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    news_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-article.news-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    SeasonalActivity: Schema.Attribute.Component<
      'seasonal-activity.seasonal-activity',
      true
    >;
    SEOMetadata: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'Name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    UserTip: Schema.Attribute.Component<'repeat.user-tips', true>;
  };
}

export interface ApiCountryCountry extends Struct.CollectionTypeSchema {
  collectionName: 'countries';
  info: {
    description: '';
    displayName: 'Country';
    pluralName: 'countries';
    singularName: 'country';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    country_fish_species: Schema.Attribute.Relation<
      'oneToMany',
      'api::country-fish-specie.country-fish-specie'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day_tickets: Schema.Attribute.Relation<
      'oneToMany',
      'api::day-ticket.day-ticket'
    >;
    description: Schema.Attribute.Blocks;
    fa_qs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    fishing_charters: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-charter.fishing-charter'
    >;
    fishing_instructors: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_methods: Schema.Attribute.Relation<
      'manyToMany',
      'api::fishing-method.fishing-method'
    >;
    fishing_retreats: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-retreat.fishing-retreat'
    >;
    fishing_spots: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::country.country'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    our_tips: Schema.Attribute.Component<'tips.our-tips', true>;
    publishedAt: Schema.Attribute.DateTime;
    regions: Schema.Attribute.Relation<'oneToMany', 'api::region.region'>;
    seo_metadata: Schema.Attribute.JSON;
    shops: Schema.Attribute.Relation<'oneToMany', 'api::shop.shop'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tip: Schema.Attribute.Component<'tips.anglers-tips', true>;
    tournament_organisers: Schema.Attribute.Relation<
      'oneToMany',
      'api::tournament-organiser.tournament-organiser'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDayTicketDayTicket extends Struct.CollectionTypeSchema {
  collectionName: 'day_tickets';
  info: {
    displayName: 'Day Ticket';
    pluralName: 'day-tickets';
    singularName: 'day-ticket';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    amenities: Schema.Attribute.JSON;
    business_type: Schema.Attribute.Enumeration<['day-ticket']>;
    contact_email: Schema.Attribute.Email;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    fish_species: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-fish-species.single-fish-species'
    >;
    fishing_method: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-method.fishing-method'
    >;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'files' | 'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::day-ticket.day-ticket'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    opening_hours: Schema.Attribute.String;
    operating_hours: Schema.Attribute.String;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    ticket_prices: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiFaqFaq extends Struct.CollectionTypeSchema {
  collectionName: 'faqs';
  info: {
    description: '';
    displayName: 'FAQs';
    pluralName: 'faqs';
    singularName: 'faq';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    Answer: Schema.Attribute.Text & Schema.Attribute.Required;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFishingCharterFishingCharter
  extends Struct.CollectionTypeSchema {
  collectionName: 'fishing_charters';
  info: {
    description: '';
    displayName: 'Fishing Charter';
    pluralName: 'fishing-charters';
    singularName: 'fishing-charter';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    amenities: Schema.Attribute.JSON;
    boat_name: Schema.Attribute.String;
    business_type: Schema.Attribute.Enumeration<['fishing-charters']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'fishing-charters'>;
    capacity: Schema.Attribute.Integer;
    captain_bio: Schema.Attribute.String;
    contact_email: Schema.Attribute.Email;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    details: Schema.Attribute.JSON;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    itinerary: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-charter.fishing-charter'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    slug: Schema.Attribute.UID<'Name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiFishingInstructorFishingInstructor
  extends Struct.CollectionTypeSchema {
  collectionName: 'fishing_instructors';
  info: {
    description: '';
    displayName: 'Fishing Instructor';
    pluralName: 'fishing-instructors';
    singularName: 'fishing-instructor';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    amenities: Schema.Attribute.JSON;
    business_type: Schema.Attribute.Enumeration<['fishing-instructors']> &
      Schema.Attribute.DefaultTo<'fishing-instructors'>;
    certifications: Schema.Attribute.String;
    contact_email: Schema.Attribute.Email & Schema.Attribute.Unique;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    expertise: Schema.Attribute.String;
    fish_species: Schema.Attribute.Relation<
      'manyToMany',
      'api::single-fish-species.single-fish-species'
    >;
    fishing_methods: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-method.fishing-method'
    >;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    opening_hours: Schema.Attribute.JSON;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    pricing: Schema.Attribute.Integer;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    schedule: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiFishingMethodFishingMethod
  extends Struct.CollectionTypeSchema {
  collectionName: 'fishing_methods';
  info: {
    description: '';
    displayName: 'Fishing Method';
    pluralName: 'fishing-methods';
    singularName: 'fishing-method';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blog_posts: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-post.blog-post'
    >;
    countries: Schema.Attribute.Relation<'manyToMany', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day_tickets: Schema.Attribute.Relation<
      'oneToMany',
      'api::day-ticket.day-ticket'
    >;
    description: Schema.Attribute.Blocks;
    fa_qs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    fish_species: Schema.Attribute.Relation<
      'manyToMany',
      'api::single-fish-species.single-fish-species'
    >;
    fishing_charters: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-charter.fishing-charter'
    >;
    fishing_spots: Schema.Attribute.Relation<
      'manyToMany',
      'api::fishing-spot.fishing-spot'
    >;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-method.fishing-method'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    news_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-article.news-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    regions: Schema.Attribute.Relation<'oneToMany', 'api::region.region'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFishingRetreatFishingRetreat
  extends Struct.CollectionTypeSchema {
  collectionName: 'fishing_retreats';
  info: {
    displayName: 'Fishing Retreats';
    pluralName: 'fishing-retreats';
    singularName: 'fishing-retreat';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    amenities: Schema.Attribute.JSON;
    booking_calendar: Schema.Attribute.JSON;
    business_type: Schema.Attribute.Enumeration<['fishing-retreat']>;
    contact_email: Schema.Attribute.Email;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    dining_options: Schema.Attribute.Text;
    fish_species: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-fish-species.single-fish-species'
    >;
    fishing_methods: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-method.fishing-method'
    >;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-retreat.fishing-retreat'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    opening_hours: Schema.Attribute.JSON;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    room_details: Schema.Attribute.Text;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiFishingSpotFishingSpot extends Struct.CollectionTypeSchema {
  collectionName: 'fishing_spots';
  info: {
    description: '';
    displayName: 'FishingSpots';
    pluralName: 'fishing-spots';
    singularName: 'fishing-spot';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.JSON;
    amenities: Schema.Attribute.Component<'content-tools.amenities', true>;
    attributes: Schema.Attribute.String & Schema.Attribute.Required;
    contact_details: Schema.Attribute.JSON;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day_tickets: Schema.Attribute.Relation<
      'oneToMany',
      'api::day-ticket.day-ticket'
    >;
    description: Schema.Attribute.Blocks;
    fa_qs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    fish_species: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-fish-species.single-fish-species'
    >;
    fishing_charters: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-charter.fishing-charter'
    >;
    fishing_instructors: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_methods: Schema.Attribute.Relation<
      'manyToMany',
      'api::fishing-method.fishing-method'
    >;
    fishing_retreats: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-retreat.fishing-retreat'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    largest_catch: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    lat: Schema.Attribute.Decimal & Schema.Attribute.Required;
    lng: Schema.Attribute.Decimal & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-spot.fishing-spot'
    > &
      Schema.Attribute.Private;
    method: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    opening_hours: Schema.Attribute.JSON;
    price: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Decimal & Schema.Attribute.DefaultTo<0>;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    rules: Schema.Attribute.String;
    shops: Schema.Attribute.Relation<'oneToMany', 'api::shop.shop'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    water_type: Schema.Attribute.Enumeration<
      ['ocean', 'sea', 'rivermouth', 'river', 'pond', 'lake', 'canal']
    > &
      Schema.Attribute.Required;
  };
}

export interface ApiGuideGuide extends Struct.CollectionTypeSchema {
  collectionName: 'guides';
  info: {
    displayName: 'Guides';
    pluralName: 'guides';
    singularName: 'guide';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    Tags: Schema.Attribute.Component<'content-tools.tag-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiNewsArticleNewsArticle extends Struct.CollectionTypeSchema {
  collectionName: 'news_articles';
  info: {
    displayName: 'NewsArticle';
    pluralName: 'news-articles';
    singularName: 'news-article';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-article.news-article'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    tags: Schema.Attribute.Component<'content-tools.tag-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users_permissions_user: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiRegionFishSpecieRegionFishSpecie
  extends Struct.CollectionTypeSchema {
  collectionName: 'region_fish_species';
  info: {
    displayName: 'Region Fish Species';
    pluralName: 'region-fish-species';
    singularName: 'region-fish-specie';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Body: Schema.Attribute.Blocks;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fishing_instructors: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_spots: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-spot.fishing-spot'
    >;
    Groundbaits: Schema.Attribute.Component<'groundbaits.groundbaits', true>;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    Intro: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::region-fish-specie.region-fish-specie'
    > &
      Schema.Attribute.Private;
    Name: Schema.Attribute.String;
    news_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-article.news-article'
    >;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    SeasonalActivity: Schema.Attribute.Component<
      'seasonal-activity.seasonal-activity',
      true
    >;
    SEOMetaData: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'Name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    UserTip: Schema.Attribute.Component<'user-tip.user-tip', true>;
  };
}

export interface ApiRegionRegion extends Struct.CollectionTypeSchema {
  collectionName: 'regions';
  info: {
    description: '';
    displayName: 'Region';
    pluralName: 'regions';
    singularName: 'region';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    blog_post: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-post.blog-post'
    >;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    day_tickets: Schema.Attribute.Relation<
      'oneToMany',
      'api::day-ticket.day-ticket'
    >;
    description: Schema.Attribute.Blocks;
    fa_qs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    fishing_charters: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-charter.fishing-charter'
    >;
    fishing_instructors: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_method: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-method.fishing-method'
    >;
    fishing_retreats: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-retreat.fishing-retreat'
    >;
    fishing_spots: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::region.region'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    region_fish_species: Schema.Attribute.Relation<
      'oneToMany',
      'api::region-fish-specie.region-fish-specie'
    >;
    shops: Schema.Attribute.Relation<'oneToMany', 'api::shop.shop'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tournament_organisers: Schema.Attribute.Relation<
      'oneToMany',
      'api::tournament-organiser.tournament-organiser'
    >;
    Type: Schema.Attribute.Enumeration<['County', 'City', 'Sea']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiShopShop extends Struct.CollectionTypeSchema {
  collectionName: 'shops';
  info: {
    displayName: 'Shop';
    pluralName: 'shops';
    singularName: 'shop';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    business_type: Schema.Attribute.Enumeration<['shop']> &
      Schema.Attribute.DefaultTo<'shop'>;
    contact_email: Schema.Attribute.Email;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    fishing_methods: Schema.Attribute.Relation<
      'oneToMany',
      'api::fishing-method.fishing-method'
    >;
    fishing_spot: Schema.Attribute.Relation<
      'manyToOne',
      'api::fishing-spot.fishing-spot'
    >;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::shop.shop'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    shop: Schema.Attribute.JSON;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ApiSingleFishSpeciesSingleFishSpecies
  extends Struct.CollectionTypeSchema {
  collectionName: 'fish_species';
  info: {
    description: '';
    displayName: 'Fish Species';
    pluralName: 'fish-species';
    singularName: 'single-fish-species';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    fishing_instructors: Schema.Attribute.Relation<
      'manyToMany',
      'api::fishing-instructor.fishing-instructor'
    >;
    fishing_methods: Schema.Attribute.Relation<
      'manyToMany',
      'api::fishing-method.fishing-method'
    >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::single-fish-species.single-fish-species'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    scientific_name: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTournamentOrganiserTournamentOrganiser
  extends Struct.CollectionTypeSchema {
  collectionName: 'tournament_organisers';
  info: {
    displayName: 'Tournament Organiser';
    pluralName: 'tournament-organisers';
    singularName: 'tournament-organiser';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    additional_info: Schema.Attribute.Text;
    amenities: Schema.Attribute.JSON;
    business_type: Schema.Attribute.Enumeration<['tournament-organiser']>;
    contact_email: Schema.Attribute.Email;
    contact_phone: Schema.Attribute.String;
    country: Schema.Attribute.Relation<'manyToOne', 'api::country.country'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tournament-organiser.tournament-organiser'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    premium: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    price_range: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.Relation<'manyToOne', 'api::region.region'>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    tournament_schedule: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    news_articles: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-article.news-article'
    >;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::blog-post.blog-post': ApiBlogPostBlogPost;
      'api::country-fish-specie.country-fish-specie': ApiCountryFishSpecieCountryFishSpecie;
      'api::country.country': ApiCountryCountry;
      'api::day-ticket.day-ticket': ApiDayTicketDayTicket;
      'api::faq.faq': ApiFaqFaq;
      'api::fishing-charter.fishing-charter': ApiFishingCharterFishingCharter;
      'api::fishing-instructor.fishing-instructor': ApiFishingInstructorFishingInstructor;
      'api::fishing-method.fishing-method': ApiFishingMethodFishingMethod;
      'api::fishing-retreat.fishing-retreat': ApiFishingRetreatFishingRetreat;
      'api::fishing-spot.fishing-spot': ApiFishingSpotFishingSpot;
      'api::guide.guide': ApiGuideGuide;
      'api::news-article.news-article': ApiNewsArticleNewsArticle;
      'api::region-fish-specie.region-fish-specie': ApiRegionFishSpecieRegionFishSpecie;
      'api::region.region': ApiRegionRegion;
      'api::shop.shop': ApiShopShop;
      'api::single-fish-species.single-fish-species': ApiSingleFishSpeciesSingleFishSpecies;
      'api::tournament-organiser.tournament-organiser': ApiTournamentOrganiserTournamentOrganiser;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
