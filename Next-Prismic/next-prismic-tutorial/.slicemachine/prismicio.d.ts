// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Item documents */
interface ItemDocumentData {
    /**
     * Title field in *Item*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: item.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Gallery image field in *Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: item.gallery_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    gallery_image: prismicT.ImageField<never>;
    /**
     * Internal image field in *Item*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: item.internal_image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    internal_image: prismicT.ImageField<never>;
    /**
     * Price field in *Item*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: item.price
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    price: prismicT.NumberField;
    /**
     * Description field in *Item*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Descrição do produto
     * - **API ID Path**: item.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item document from Prismic
 *
 * - **API ID**: `item`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ItemDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ItemDocumentData>, "item", Lang>;
export type AllDocumentTypes = ItemDocument;
/**
 * Primary content in Example → Primary
 *
 */
interface ExampleSliceDefaultPrimary {
    /**
     * Slice example field in *Example → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: example.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Finalidade field in *Example → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: Este é um slice exemplo
     * - **API ID Path**: example.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Creator field in *Example → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: example.primary.creator
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    creator: prismicT.RichTextField;
}
/**
 * Item in Example → Items
 *
 */
export interface ExampleSliceDefaultItem {
    /**
     * item name field in *Example → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: example.items[].item_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    item_name: prismicT.RichTextField;
    /**
     * item pic field in *Example → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: example.items[].item_pic
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    item_pic: prismicT.ImageField<never>;
    /**
     * desc link field in *Example → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: example.items[].desc_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    desc_link: prismicT.LinkField;
}
/**
 * Default variation for Example Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Example`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExampleSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ExampleSliceDefaultPrimary>, Simplify<ExampleSliceDefaultItem>>;
/**
 * Slice variation for *Example*
 *
 */
type ExampleSliceVariation = ExampleSliceDefault;
/**
 * Example Shared Slice
 *
 * - **API ID**: `example`
 * - **Description**: `Example`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ExampleSlice = prismicT.SharedSlice<"example", ExampleSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ItemDocumentData, ItemDocument, AllDocumentTypes, ExampleSliceDefaultPrimary, ExampleSliceDefaultItem, ExampleSliceDefault, ExampleSliceVariation, ExampleSlice };
    }
}
