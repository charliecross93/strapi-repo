import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-tools.amenities': ContentToolsAmenities;
      'content-tools.category': ContentToolsCategory;
      'content-tools.species': ContentToolsSpecies;
      'content-tools.tag-item': ContentToolsTagItem;
      'tips.anglers-tips': TipsAnglersTips;
      'tips.our-tips': TipsOurTips;
    }
  }
}
