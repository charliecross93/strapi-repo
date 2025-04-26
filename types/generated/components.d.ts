import type { Schema, Struct } from '@strapi/strapi';

export interface BaitsandLuresBaitsAndLures extends Struct.ComponentSchema {
  collectionName: 'components_baitsand_lures_baits_and_lures';
  info: {
    displayName: 'Baits & Lures';
    icon: 'thumbUp';
  };
  attributes: {
    baits: Schema.Attribute.String;
    lures: Schema.Attribute.String;
    season: Schema.Attribute.String;
  };
}

export interface ContentToolsAmenities extends Struct.ComponentSchema {
  collectionName: 'components_content_tools_amenities';
  info: {
    displayName: 'amenities';
    icon: 'brush';
  };
  attributes: {};
}

export interface ContentToolsCategory extends Struct.ComponentSchema {
  collectionName: 'components_content_tools_categories';
  info: {
    displayName: 'Category';
    icon: 'brush';
  };
  attributes: {};
}

export interface ContentToolsSpecies extends Struct.ComponentSchema {
  collectionName: 'components_content_tools_species';
  info: {
    displayName: 'Species';
    icon: 'brush';
  };
  attributes: {};
}

export interface ContentToolsTagItem extends Struct.ComponentSchema {
  collectionName: 'components_content_tools_tag_items';
  info: {
    displayName: 'TagItem';
    icon: 'write';
  };
  attributes: {};
}

export interface GroundbaitsGroundbaits extends Struct.ComponentSchema {
  collectionName: 'components_groundbaits_groundbaits';
  info: {
    displayName: 'Groundbaits';
    icon: 'bold';
  };
  attributes: {
    groundbaitmixture: Schema.Attribute.Text;
    season: Schema.Attribute.String;
  };
}

export interface RepeatUserTips extends Struct.ComponentSchema {
  collectionName: 'components_repeat_user_tips';
  info: {
    displayName: 'User Tips';
    icon: 'user';
  };
  attributes: {
    Author: Schema.Attribute.String;
    Date: Schema.Attribute.Date;
    TExt: Schema.Attribute.String;
  };
}

export interface SeasonalActivitySeasonalActivity
  extends Struct.ComponentSchema {
  collectionName: 'components_seasonal_activity_seasonal_activities';
  info: {
    displayName: 'Seasonal Activity';
    icon: 'apps';
  };
  attributes: {
    activefrom: Schema.Attribute.Date;
    activeto: Schema.Attribute.Date;
    closedseasonend: Schema.Attribute.Date;
    closedseasonstart: Schema.Attribute.Date;
    fishingseasonend: Schema.Attribute.Date;
    fishingseasonstart: Schema.Attribute.Date;
    season: Schema.Attribute.String;
    spawntime: Schema.Attribute.String;
  };
}

export interface TipsAnglersTips extends Struct.ComponentSchema {
  collectionName: 'components_tips_anglers_tips';
  info: {
    displayName: 'anglers_tips';
    icon: 'user';
  };
  attributes: {};
}

export interface TipsOurTips extends Struct.ComponentSchema {
  collectionName: 'components_tips_our_tips';
  info: {
    displayName: 'our_tips';
    icon: 'user';
  };
  attributes: {};
}

export interface UserTipUserTip extends Struct.ComponentSchema {
  collectionName: 'components_user_tip_user_tips';
  info: {
    displayName: 'UserTip';
    icon: 'apps';
  };
  attributes: {
    Author: Schema.Attribute.String;
    baitsandlures: Schema.Attribute.Component<
      'baitsand-lures.baits-and-lures',
      true
    >;
    Date: Schema.Attribute.Date;
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'baitsand-lures.baits-and-lures': BaitsandLuresBaitsAndLures;
      'content-tools.amenities': ContentToolsAmenities;
      'content-tools.category': ContentToolsCategory;
      'content-tools.species': ContentToolsSpecies;
      'content-tools.tag-item': ContentToolsTagItem;
      'groundbaits.groundbaits': GroundbaitsGroundbaits;
      'repeat.user-tips': RepeatUserTips;
      'seasonal-activity.seasonal-activity': SeasonalActivitySeasonalActivity;
      'tips.anglers-tips': TipsAnglersTips;
      'tips.our-tips': TipsOurTips;
      'user-tip.user-tip': UserTipUserTip;
    }
  }
}
