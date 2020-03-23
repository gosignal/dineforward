/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["_ListAccess"]: AliasType<{
	create?:true,
	read?:true,
	update?:true,
	delete?:true,
	auth?:true
		__typename?: true
}>;
	["_ListMeta"]: AliasType<{
	name?:true,
	access?:ValueTypes["_ListAccess"],
	schema?:ValueTypes["_ListSchema"]
		__typename?: true
}>;
	["_ListSchema"]: AliasType<{
	type?:true,
	queries?:true,
	relatedFields?:ValueTypes["_ListSchemaRelatedFields"]
		__typename?: true
}>;
	["_ListSchemaRelatedFields"]: AliasType<{
	type?:true,
	fields?:true
		__typename?: true
}>;
	["_QueryMeta"]: AliasType<{
	count?:true
		__typename?: true
}>;
	["authenticateUserOutput"]: AliasType<{
	token?:true,
	item?:ValueTypes["User"]
		__typename?: true
}>;
	["BlockContent"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	title?:true,
	subtitle?:true,
	hero?:ValueTypes["File"],
	image?:ValueTypes["CloudinaryImage_File"],
	textContent?:true,
	richContent?:true,
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["BlockContentCreateInput"]: {
	name?:string,
	title?:string,
	subtitle?:string,
	hero?:ValueTypes["Upload"],
	image?:ValueTypes["Upload"],
	textContent?:string,
	richContent?:string
};
	["BlockContentRelateToManyInput"]: {
	create?:(ValueTypes["BlockContentCreateInput"] | undefined)[],
	connect?:(ValueTypes["BlockContentWhereUniqueInput"] | undefined)[],
	disconnect?:(ValueTypes["BlockContentWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
};
	["BlockContentsCreateInput"]: {
	data?:ValueTypes["BlockContentCreateInput"]
};
	["BlockContentsUpdateInput"]: {
	id:string,
	data?:ValueTypes["BlockContentUpdateInput"]
};
	["BlockContentUpdateInput"]: {
	name?:string,
	title?:string,
	subtitle?:string,
	hero?:ValueTypes["Upload"],
	image?:ValueTypes["Upload"],
	textContent?:string,
	richContent?:string
};
	["BlockContentWhereInput"]: {
	AND?:(ValueTypes["BlockContentWhereInput"] | undefined)[],
	OR?:(ValueTypes["BlockContentWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	title?:string,
	title_not?:string,
	title_contains?:string,
	title_not_contains?:string,
	title_starts_with?:string,
	title_not_starts_with?:string,
	title_ends_with?:string,
	title_not_ends_with?:string,
	title_i?:string,
	title_not_i?:string,
	title_contains_i?:string,
	title_not_contains_i?:string,
	title_starts_with_i?:string,
	title_not_starts_with_i?:string,
	title_ends_with_i?:string,
	title_not_ends_with_i?:string,
	title_in?:(string | undefined)[],
	title_not_in?:(string | undefined)[],
	subtitle?:string,
	subtitle_not?:string,
	subtitle_contains?:string,
	subtitle_not_contains?:string,
	subtitle_starts_with?:string,
	subtitle_not_starts_with?:string,
	subtitle_ends_with?:string,
	subtitle_not_ends_with?:string,
	subtitle_i?:string,
	subtitle_not_i?:string,
	subtitle_contains_i?:string,
	subtitle_not_contains_i?:string,
	subtitle_starts_with_i?:string,
	subtitle_not_starts_with_i?:string,
	subtitle_ends_with_i?:string,
	subtitle_not_ends_with_i?:string,
	subtitle_in?:(string | undefined)[],
	subtitle_not_in?:(string | undefined)[],
	hero?:string,
	hero_not?:string,
	hero_contains?:string,
	hero_not_contains?:string,
	hero_starts_with?:string,
	hero_not_starts_with?:string,
	hero_ends_with?:string,
	hero_not_ends_with?:string,
	hero_in?:(string | undefined)[],
	hero_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	textContent?:string,
	textContent_not?:string,
	textContent_contains?:string,
	textContent_not_contains?:string,
	textContent_starts_with?:string,
	textContent_not_starts_with?:string,
	textContent_ends_with?:string,
	textContent_not_ends_with?:string,
	textContent_i?:string,
	textContent_not_i?:string,
	textContent_contains_i?:string,
	textContent_not_contains_i?:string,
	textContent_starts_with_i?:string,
	textContent_not_starts_with_i?:string,
	textContent_ends_with_i?:string,
	textContent_not_ends_with_i?:string,
	textContent_in?:(string | undefined)[],
	textContent_not_in?:(string | undefined)[],
	richContent?:string,
	richContent_not?:string,
	richContent_contains?:string,
	richContent_not_contains?:string,
	richContent_starts_with?:string,
	richContent_not_starts_with?:string,
	richContent_ends_with?:string,
	richContent_not_ends_with?:string,
	richContent_i?:string,
	richContent_not_i?:string,
	richContent_contains_i?:string,
	richContent_not_contains_i?:string,
	richContent_starts_with_i?:string,
	richContent_not_starts_with_i?:string,
	richContent_ends_with_i?:string,
	richContent_not_ends_with_i?:string,
	richContent_in?:(string | undefined)[],
	richContent_not_in?:(string | undefined)[],
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["BlockContentWhereUniqueInput"]: {
	id:string
};
	["Business"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	description?:true,
	owner?:ValueTypes["User"],
staffMembers?: [{	where?:ValueTypes["StaffNameWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["StaffName"]],
_staffMembersMeta?: [{	where?:ValueTypes["StaffNameWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	profileImage?:ValueTypes["CloudinaryImage_File"],
	heroImage?:ValueTypes["CloudinaryImage_File"],
	themeColor?:true,
	location?:ValueTypes["Location"],
	businessSlug?:true,
backers?: [{	where?:ValueTypes["UserWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["User"]],
_backersMeta?: [{	where?:ValueTypes["UserWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	status?:true,
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["BusinessCreateInput"]: {
	name?:string,
	description?:string,
	owner?:ValueTypes["UserRelateToOneInput"],
	staffMembers?:ValueTypes["StaffNameRelateToManyInput"],
	profileImage?:ValueTypes["Upload"],
	heroImage?:ValueTypes["Upload"],
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:ValueTypes["UserRelateToManyInput"],
	status?:ValueTypes["BusinessStatusType"]
};
	["BusinessesCreateInput"]: {
	data?:ValueTypes["BusinessCreateInput"]
};
	["BusinessesUpdateInput"]: {
	id:string,
	data?:ValueTypes["BusinessUpdateInput"]
};
	["BusinessRelateToManyInput"]: {
	create?:(ValueTypes["BusinessCreateInput"] | undefined)[],
	connect?:(ValueTypes["BusinessWhereUniqueInput"] | undefined)[],
	disconnect?:(ValueTypes["BusinessWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
};
	["BusinessRelateToOneInput"]: {
	create?:ValueTypes["BusinessCreateInput"],
	connect?:ValueTypes["BusinessWhereUniqueInput"],
	disconnect?:ValueTypes["BusinessWhereUniqueInput"],
	disconnectAll?:boolean
};
	["BusinessStatusType"]:BusinessStatusType;
	["BusinessUpdateInput"]: {
	name?:string,
	description?:string,
	owner?:ValueTypes["UserRelateToOneInput"],
	staffMembers?:ValueTypes["StaffNameRelateToManyInput"],
	profileImage?:ValueTypes["Upload"],
	heroImage?:ValueTypes["Upload"],
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:ValueTypes["UserRelateToManyInput"],
	status?:ValueTypes["BusinessStatusType"]
};
	["BusinessWhereInput"]: {
	AND?:(ValueTypes["BusinessWhereInput"] | undefined)[],
	OR?:(ValueTypes["BusinessWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	owner?:ValueTypes["UserWhereInput"],
	owner_is_null?:boolean,
	staffMembers_every?:ValueTypes["StaffNameWhereInput"],
	staffMembers_some?:ValueTypes["StaffNameWhereInput"],
	staffMembers_none?:ValueTypes["StaffNameWhereInput"],
	staffMembers_is_null?:boolean,
	profileImage?:string,
	profileImage_not?:string,
	profileImage_contains?:string,
	profileImage_not_contains?:string,
	profileImage_starts_with?:string,
	profileImage_not_starts_with?:string,
	profileImage_ends_with?:string,
	profileImage_not_ends_with?:string,
	profileImage_in?:(string | undefined)[],
	profileImage_not_in?:(string | undefined)[],
	heroImage?:string,
	heroImage_not?:string,
	heroImage_contains?:string,
	heroImage_not_contains?:string,
	heroImage_starts_with?:string,
	heroImage_not_starts_with?:string,
	heroImage_ends_with?:string,
	heroImage_not_ends_with?:string,
	heroImage_in?:(string | undefined)[],
	heroImage_not_in?:(string | undefined)[],
	themeColor?:string,
	themeColor_not?:string,
	themeColor_contains?:string,
	themeColor_not_contains?:string,
	themeColor_starts_with?:string,
	themeColor_not_starts_with?:string,
	themeColor_ends_with?:string,
	themeColor_not_ends_with?:string,
	themeColor_i?:string,
	themeColor_not_i?:string,
	themeColor_contains_i?:string,
	themeColor_not_contains_i?:string,
	themeColor_starts_with_i?:string,
	themeColor_not_starts_with_i?:string,
	themeColor_ends_with_i?:string,
	themeColor_not_ends_with_i?:string,
	themeColor_in?:(string | undefined)[],
	themeColor_not_in?:(string | undefined)[],
	location?:string,
	location_not?:string,
	location_contains?:string,
	location_not_contains?:string,
	location_starts_with?:string,
	location_not_starts_with?:string,
	location_ends_with?:string,
	location_not_ends_with?:string,
	location_in?:(string | undefined)[],
	location_not_in?:(string | undefined)[],
	businessSlug?:string,
	businessSlug_not?:string,
	businessSlug_contains?:string,
	businessSlug_not_contains?:string,
	businessSlug_starts_with?:string,
	businessSlug_not_starts_with?:string,
	businessSlug_ends_with?:string,
	businessSlug_not_ends_with?:string,
	businessSlug_i?:string,
	businessSlug_not_i?:string,
	businessSlug_contains_i?:string,
	businessSlug_not_contains_i?:string,
	businessSlug_starts_with_i?:string,
	businessSlug_not_starts_with_i?:string,
	businessSlug_ends_with_i?:string,
	businessSlug_not_ends_with_i?:string,
	businessSlug_in?:(string | undefined)[],
	businessSlug_not_in?:(string | undefined)[],
	backers_every?:ValueTypes["UserWhereInput"],
	backers_some?:ValueTypes["UserWhereInput"],
	backers_none?:ValueTypes["UserWhereInput"],
	backers_is_null?:boolean,
	status?:ValueTypes["BusinessStatusType"],
	status_not?:ValueTypes["BusinessStatusType"],
	status_in?:(ValueTypes["BusinessStatusType"] | undefined)[],
	status_not_in?:(ValueTypes["BusinessStatusType"] | undefined)[],
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["BusinessWhereUniqueInput"]: {
	id:string
};
	["CacheControlScope"]:CacheControlScope;
	["CloudinaryImage_File"]: AliasType<{
	id?:true,
	path?:true,
	filename?:true,
	originalFilename?:true,
	mimetype?:true,
	encoding?:true,
	publicUrl?:true,
publicUrlTransformed?: [{	transformation?:ValueTypes["CloudinaryImageFormat"]},true]
		__typename?: true
}>;
	["CloudinaryImageFormat"]: {
	prettyName?:string,
	width?:string,
	height?:string,
	crop?:string,
	aspect_ratio?:string,
	gravity?:string,
	zoom?:string,
	x?:string,
	y?:string,
	format?:string,
	fetch_format?:string,
	quality?:string,
	radius?:string,
	angle?:string,
	effect?:string,
	opacity?:string,
	border?:string,
	background?:string,
	overlay?:string,
	underlay?:string,
	default_image?:string,
	delay?:string,
	color?:string,
	color_space?:string,
	dpr?:string,
	page?:string,
	density?:string,
	flags?:string,
	transformation?:string
};
	["ContentPage"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	slug?:true,
	status?:true,
blocks?: [{	where?:ValueTypes["BlockContentWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["BlockContent"]],
_blocksMeta?: [{	where?:ValueTypes["BlockContentWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["ContentPageCreateInput"]: {
	name?:string,
	slug?:string,
	status?:ValueTypes["ContentPageStatusType"],
	blocks?:ValueTypes["BlockContentRelateToManyInput"]
};
	["ContentPagesCreateInput"]: {
	data?:ValueTypes["ContentPageCreateInput"]
};
	["ContentPageStatusType"]:ContentPageStatusType;
	["ContentPagesUpdateInput"]: {
	id:string,
	data?:ValueTypes["ContentPageUpdateInput"]
};
	["ContentPageUpdateInput"]: {
	name?:string,
	slug?:string,
	status?:ValueTypes["ContentPageStatusType"],
	blocks?:ValueTypes["BlockContentRelateToManyInput"]
};
	["ContentPageWhereInput"]: {
	AND?:(ValueTypes["ContentPageWhereInput"] | undefined)[],
	OR?:(ValueTypes["ContentPageWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	slug?:string,
	slug_not?:string,
	slug_contains?:string,
	slug_not_contains?:string,
	slug_starts_with?:string,
	slug_not_starts_with?:string,
	slug_ends_with?:string,
	slug_not_ends_with?:string,
	slug_i?:string,
	slug_not_i?:string,
	slug_contains_i?:string,
	slug_not_contains_i?:string,
	slug_starts_with_i?:string,
	slug_not_starts_with_i?:string,
	slug_ends_with_i?:string,
	slug_not_ends_with_i?:string,
	slug_in?:(string | undefined)[],
	slug_not_in?:(string | undefined)[],
	status?:ValueTypes["ContentPageStatusType"],
	status_not?:ValueTypes["ContentPageStatusType"],
	status_in?:(ValueTypes["ContentPageStatusType"] | undefined)[],
	status_not_in?:(ValueTypes["ContentPageStatusType"] | undefined)[],
	blocks_every?:ValueTypes["BlockContentWhereInput"],
	blocks_some?:ValueTypes["BlockContentWhereInput"],
	blocks_none?:ValueTypes["BlockContentWhereInput"],
	blocks_is_null?:boolean,
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["ContentPageWhereUniqueInput"]: {
	id:string
};
	["DateTime"]:unknown;
	["File"]: AliasType<{
	id?:true,
	path?:true,
	filename?:true,
	originalFilename?:true,
	mimetype?:true,
	encoding?:true,
	publicUrl?:true
		__typename?: true
}>;
	["ForgottenPasswordToken"]: AliasType<{
	_label_?:true,
	id?:true,
	user?:ValueTypes["User"],
	token?:true,
	requestedAt?:true,
	accessedAt?:true,
	expiresAt?:true,
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["ForgottenPasswordTokenCreateInput"]: {
	user?:ValueTypes["UserRelateToOneInput"],
	token?:string,
	requestedAt?:ValueTypes["DateTime"],
	accessedAt?:ValueTypes["DateTime"],
	expiresAt?:ValueTypes["DateTime"]
};
	["ForgottenPasswordTokensCreateInput"]: {
	data?:ValueTypes["ForgottenPasswordTokenCreateInput"]
};
	["ForgottenPasswordTokensUpdateInput"]: {
	id:string,
	data?:ValueTypes["ForgottenPasswordTokenUpdateInput"]
};
	["ForgottenPasswordTokenUpdateInput"]: {
	user?:ValueTypes["UserRelateToOneInput"],
	token?:string,
	requestedAt?:ValueTypes["DateTime"],
	accessedAt?:ValueTypes["DateTime"],
	expiresAt?:ValueTypes["DateTime"]
};
	["ForgottenPasswordTokenWhereInput"]: {
	AND?:(ValueTypes["ForgottenPasswordTokenWhereInput"] | undefined)[],
	OR?:(ValueTypes["ForgottenPasswordTokenWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	user?:ValueTypes["UserWhereInput"],
	user_is_null?:boolean,
	token?:string,
	token_not?:string,
	token_contains?:string,
	token_not_contains?:string,
	token_starts_with?:string,
	token_not_starts_with?:string,
	token_ends_with?:string,
	token_not_ends_with?:string,
	token_i?:string,
	token_not_i?:string,
	token_contains_i?:string,
	token_not_contains_i?:string,
	token_starts_with_i?:string,
	token_not_starts_with_i?:string,
	token_ends_with_i?:string,
	token_not_ends_with_i?:string,
	token_in?:(string | undefined)[],
	token_not_in?:(string | undefined)[],
	requestedAt?:ValueTypes["DateTime"],
	requestedAt_not?:ValueTypes["DateTime"],
	requestedAt_lt?:ValueTypes["DateTime"],
	requestedAt_lte?:ValueTypes["DateTime"],
	requestedAt_gt?:ValueTypes["DateTime"],
	requestedAt_gte?:ValueTypes["DateTime"],
	requestedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	requestedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	accessedAt?:ValueTypes["DateTime"],
	accessedAt_not?:ValueTypes["DateTime"],
	accessedAt_lt?:ValueTypes["DateTime"],
	accessedAt_lte?:ValueTypes["DateTime"],
	accessedAt_gt?:ValueTypes["DateTime"],
	accessedAt_gte?:ValueTypes["DateTime"],
	accessedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	accessedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	expiresAt?:ValueTypes["DateTime"],
	expiresAt_not?:ValueTypes["DateTime"],
	expiresAt_lt?:ValueTypes["DateTime"],
	expiresAt_lte?:ValueTypes["DateTime"],
	expiresAt_gt?:ValueTypes["DateTime"],
	expiresAt_gte?:ValueTypes["DateTime"],
	expiresAt_in?:(ValueTypes["DateTime"] | undefined)[],
	expiresAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["ForgottenPasswordTokenWhereUniqueInput"]: {
	id:string
};
	["JSON"]:unknown;
	["Location"]: AliasType<{
	id?:true,
	googlePlaceID?:true,
	formattedAddress?:true,
	lat?:true,
	lng?:true
		__typename?: true
}>;
	["Mutation"]: AliasType<{
createUser?: [{	data?:ValueTypes["UserCreateInput"]},ValueTypes["User"]],
createUsers?: [{	data?:(ValueTypes["UsersCreateInput"] | undefined)[]},ValueTypes["User"]],
updateUser?: [{	id:string,	data?:ValueTypes["UserUpdateInput"]},ValueTypes["User"]],
updateUsers?: [{	data?:(ValueTypes["UsersUpdateInput"] | undefined)[]},ValueTypes["User"]],
deleteUser?: [{	id:string},ValueTypes["User"]],
deleteUsers?: [{	ids?:string[]},ValueTypes["User"]],
createBusiness?: [{	data?:ValueTypes["BusinessCreateInput"]},ValueTypes["Business"]],
createBusinesses?: [{	data?:(ValueTypes["BusinessesCreateInput"] | undefined)[]},ValueTypes["Business"]],
updateBusiness?: [{	id:string,	data?:ValueTypes["BusinessUpdateInput"]},ValueTypes["Business"]],
updateBusinesses?: [{	data?:(ValueTypes["BusinessesUpdateInput"] | undefined)[]},ValueTypes["Business"]],
deleteBusiness?: [{	id:string},ValueTypes["Business"]],
deleteBusinesses?: [{	ids?:string[]},ValueTypes["Business"]],
createOffering?: [{	data?:ValueTypes["OfferingCreateInput"]},ValueTypes["Offering"]],
createOfferings?: [{	data?:(ValueTypes["OfferingsCreateInput"] | undefined)[]},ValueTypes["Offering"]],
updateOffering?: [{	id:string,	data?:ValueTypes["OfferingUpdateInput"]},ValueTypes["Offering"]],
updateOfferings?: [{	data?:(ValueTypes["OfferingsUpdateInput"] | undefined)[]},ValueTypes["Offering"]],
deleteOffering?: [{	id:string},ValueTypes["Offering"]],
deleteOfferings?: [{	ids?:string[]},ValueTypes["Offering"]],
createPurchase?: [{	data?:ValueTypes["PurchaseCreateInput"]},ValueTypes["Purchase"]],
createPurchases?: [{	data?:(ValueTypes["PurchasesCreateInput"] | undefined)[]},ValueTypes["Purchase"]],
updatePurchase?: [{	id:string,	data?:ValueTypes["PurchaseUpdateInput"]},ValueTypes["Purchase"]],
updatePurchases?: [{	data?:(ValueTypes["PurchasesUpdateInput"] | undefined)[]},ValueTypes["Purchase"]],
deletePurchase?: [{	id:string},ValueTypes["Purchase"]],
deletePurchases?: [{	ids?:string[]},ValueTypes["Purchase"]],
createStaffName?: [{	data?:ValueTypes["StaffNameCreateInput"]},ValueTypes["StaffName"]],
createStaffNames?: [{	data?:(ValueTypes["StaffNamesCreateInput"] | undefined)[]},ValueTypes["StaffName"]],
updateStaffName?: [{	id:string,	data?:ValueTypes["StaffNameUpdateInput"]},ValueTypes["StaffName"]],
updateStaffNames?: [{	data?:(ValueTypes["StaffNamesUpdateInput"] | undefined)[]},ValueTypes["StaffName"]],
deleteStaffName?: [{	id:string},ValueTypes["StaffName"]],
deleteStaffNames?: [{	ids?:string[]},ValueTypes["StaffName"]],
createForgottenPasswordToken?: [{	data?:ValueTypes["ForgottenPasswordTokenCreateInput"]},ValueTypes["ForgottenPasswordToken"]],
createForgottenPasswordTokens?: [{	data?:(ValueTypes["ForgottenPasswordTokensCreateInput"] | undefined)[]},ValueTypes["ForgottenPasswordToken"]],
updateForgottenPasswordToken?: [{	id:string,	data?:ValueTypes["ForgottenPasswordTokenUpdateInput"]},ValueTypes["ForgottenPasswordToken"]],
updateForgottenPasswordTokens?: [{	data?:(ValueTypes["ForgottenPasswordTokensUpdateInput"] | undefined)[]},ValueTypes["ForgottenPasswordToken"]],
deleteForgottenPasswordToken?: [{	id:string},ValueTypes["ForgottenPasswordToken"]],
deleteForgottenPasswordTokens?: [{	ids?:string[]},ValueTypes["ForgottenPasswordToken"]],
createBlockContent?: [{	data?:ValueTypes["BlockContentCreateInput"]},ValueTypes["BlockContent"]],
createBlockContents?: [{	data?:(ValueTypes["BlockContentsCreateInput"] | undefined)[]},ValueTypes["BlockContent"]],
updateBlockContent?: [{	id:string,	data?:ValueTypes["BlockContentUpdateInput"]},ValueTypes["BlockContent"]],
updateBlockContents?: [{	data?:(ValueTypes["BlockContentsUpdateInput"] | undefined)[]},ValueTypes["BlockContent"]],
deleteBlockContent?: [{	id:string},ValueTypes["BlockContent"]],
deleteBlockContents?: [{	ids?:string[]},ValueTypes["BlockContent"]],
createContentPage?: [{	data?:ValueTypes["ContentPageCreateInput"]},ValueTypes["ContentPage"]],
createContentPages?: [{	data?:(ValueTypes["ContentPagesCreateInput"] | undefined)[]},ValueTypes["ContentPage"]],
updateContentPage?: [{	id:string,	data?:ValueTypes["ContentPageUpdateInput"]},ValueTypes["ContentPage"]],
updateContentPages?: [{	data?:(ValueTypes["ContentPagesUpdateInput"] | undefined)[]},ValueTypes["ContentPage"]],
deleteContentPage?: [{	id:string},ValueTypes["ContentPage"]],
deleteContentPages?: [{	ids?:string[]},ValueTypes["ContentPage"]],
createPassportSession?: [{	data?:ValueTypes["PassportSessionCreateInput"]},ValueTypes["passportSession"]],
createPassportSessions?: [{	data?:(ValueTypes["PassportSessionsCreateInput"] | undefined)[]},ValueTypes["passportSession"]],
updatePassportSession?: [{	id:string,	data?:ValueTypes["PassportSessionUpdateInput"]},ValueTypes["passportSession"]],
updatePassportSessions?: [{	data?:(ValueTypes["PassportSessionsUpdateInput"] | undefined)[]},ValueTypes["passportSession"]],
deletePassportSession?: [{	id:string},ValueTypes["passportSession"]],
deletePassportSessions?: [{	ids?:string[]},ValueTypes["passportSession"]],
authenticateUserWithFacebook?: [{	itemId:string,	accessToken:string},ValueTypes["authenticateUserOutput"]],
	unauthenticateUser?:ValueTypes["unauthenticateUserOutput"],
authenticateUserWithGoogle?: [{	itemId:string,	accessToken:string},ValueTypes["authenticateUserOutput"]],
authenticateUserWithPassword?: [{	email?:string,	password?:string},ValueTypes["authenticateUserOutput"]]
		__typename?: true
}>;
	["Offering"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	details?:true,
	status?:true,
	business?:ValueTypes["Business"],
	price?:true,
	currency?:true,
	description?:true,
	maxSlots?:true,
	iAvailable?:true,
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["OfferingCreateInput"]: {
	name?:string,
	details?:string,
	status?:ValueTypes["OfferingStatusType"],
	business?:ValueTypes["BusinessRelateToOneInput"],
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
};
	["OfferingRelateToOneInput"]: {
	create?:ValueTypes["OfferingCreateInput"],
	connect?:ValueTypes["OfferingWhereUniqueInput"],
	disconnect?:ValueTypes["OfferingWhereUniqueInput"],
	disconnectAll?:boolean
};
	["OfferingsCreateInput"]: {
	data?:ValueTypes["OfferingCreateInput"]
};
	["OfferingStatusType"]:OfferingStatusType;
	["OfferingsUpdateInput"]: {
	id:string,
	data?:ValueTypes["OfferingUpdateInput"]
};
	["OfferingUpdateInput"]: {
	name?:string,
	details?:string,
	status?:ValueTypes["OfferingStatusType"],
	business?:ValueTypes["BusinessRelateToOneInput"],
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
};
	["OfferingWhereInput"]: {
	AND?:(ValueTypes["OfferingWhereInput"] | undefined)[],
	OR?:(ValueTypes["OfferingWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	details?:string,
	details_not?:string,
	details_contains?:string,
	details_not_contains?:string,
	details_starts_with?:string,
	details_not_starts_with?:string,
	details_ends_with?:string,
	details_not_ends_with?:string,
	details_i?:string,
	details_not_i?:string,
	details_contains_i?:string,
	details_not_contains_i?:string,
	details_starts_with_i?:string,
	details_not_starts_with_i?:string,
	details_ends_with_i?:string,
	details_not_ends_with_i?:string,
	details_in?:(string | undefined)[],
	details_not_in?:(string | undefined)[],
	status?:ValueTypes["OfferingStatusType"],
	status_not?:ValueTypes["OfferingStatusType"],
	status_in?:(ValueTypes["OfferingStatusType"] | undefined)[],
	status_not_in?:(ValueTypes["OfferingStatusType"] | undefined)[],
	business?:ValueTypes["BusinessWhereInput"],
	business_is_null?:boolean,
	price?:string,
	price_not?:string,
	price_lt?:string,
	price_lte?:string,
	price_gt?:string,
	price_gte?:string,
	price_in?:(string | undefined)[],
	price_not_in?:(string | undefined)[],
	currency?:string,
	currency_not?:string,
	currency_contains?:string,
	currency_not_contains?:string,
	currency_starts_with?:string,
	currency_not_starts_with?:string,
	currency_ends_with?:string,
	currency_not_ends_with?:string,
	currency_i?:string,
	currency_not_i?:string,
	currency_contains_i?:string,
	currency_not_contains_i?:string,
	currency_starts_with_i?:string,
	currency_not_starts_with_i?:string,
	currency_ends_with_i?:string,
	currency_not_ends_with_i?:string,
	currency_in?:(string | undefined)[],
	currency_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	maxSlots?:number,
	maxSlots_not?:number,
	maxSlots_lt?:number,
	maxSlots_lte?:number,
	maxSlots_gt?:number,
	maxSlots_gte?:number,
	maxSlots_in?:(number | undefined)[],
	maxSlots_not_in?:(number | undefined)[],
	iAvailable?:boolean,
	iAvailable_not?:boolean,
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["OfferingWhereUniqueInput"]: {
	id:string
};
	["passportSession"]: AliasType<{
	_label_?:true,
	id?:true,
	service?:true,
	serviceUserId?:true,
	tokenSecret?:true,
	refreshToken?:true,
	item?:ValueTypes["User"]
		__typename?: true
}>;
	["PassportSessionCreateInput"]: {
	service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:ValueTypes["UserRelateToOneInput"]
};
	["PassportSessionsCreateInput"]: {
	data?:ValueTypes["PassportSessionCreateInput"]
};
	["PassportSessionsUpdateInput"]: {
	id:string,
	data?:ValueTypes["PassportSessionUpdateInput"]
};
	["PassportSessionUpdateInput"]: {
	service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:ValueTypes["UserRelateToOneInput"]
};
	["PassportSessionWhereInput"]: {
	AND?:(ValueTypes["PassportSessionWhereInput"] | undefined)[],
	OR?:(ValueTypes["PassportSessionWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	service?:string,
	service_not?:string,
	service_contains?:string,
	service_not_contains?:string,
	service_starts_with?:string,
	service_not_starts_with?:string,
	service_ends_with?:string,
	service_not_ends_with?:string,
	service_i?:string,
	service_not_i?:string,
	service_contains_i?:string,
	service_not_contains_i?:string,
	service_starts_with_i?:string,
	service_not_starts_with_i?:string,
	service_ends_with_i?:string,
	service_not_ends_with_i?:string,
	service_in?:(string | undefined)[],
	service_not_in?:(string | undefined)[],
	serviceUserId?:string,
	serviceUserId_not?:string,
	serviceUserId_contains?:string,
	serviceUserId_not_contains?:string,
	serviceUserId_starts_with?:string,
	serviceUserId_not_starts_with?:string,
	serviceUserId_ends_with?:string,
	serviceUserId_not_ends_with?:string,
	serviceUserId_i?:string,
	serviceUserId_not_i?:string,
	serviceUserId_contains_i?:string,
	serviceUserId_not_contains_i?:string,
	serviceUserId_starts_with_i?:string,
	serviceUserId_not_starts_with_i?:string,
	serviceUserId_ends_with_i?:string,
	serviceUserId_not_ends_with_i?:string,
	serviceUserId_in?:(string | undefined)[],
	serviceUserId_not_in?:(string | undefined)[],
	tokenSecret?:string,
	tokenSecret_not?:string,
	tokenSecret_contains?:string,
	tokenSecret_not_contains?:string,
	tokenSecret_starts_with?:string,
	tokenSecret_not_starts_with?:string,
	tokenSecret_ends_with?:string,
	tokenSecret_not_ends_with?:string,
	tokenSecret_i?:string,
	tokenSecret_not_i?:string,
	tokenSecret_contains_i?:string,
	tokenSecret_not_contains_i?:string,
	tokenSecret_starts_with_i?:string,
	tokenSecret_not_starts_with_i?:string,
	tokenSecret_ends_with_i?:string,
	tokenSecret_not_ends_with_i?:string,
	tokenSecret_in?:(string | undefined)[],
	tokenSecret_not_in?:(string | undefined)[],
	refreshToken?:string,
	refreshToken_not?:string,
	refreshToken_contains?:string,
	refreshToken_not_contains?:string,
	refreshToken_starts_with?:string,
	refreshToken_not_starts_with?:string,
	refreshToken_ends_with?:string,
	refreshToken_not_ends_with?:string,
	refreshToken_i?:string,
	refreshToken_not_i?:string,
	refreshToken_contains_i?:string,
	refreshToken_not_contains_i?:string,
	refreshToken_starts_with_i?:string,
	refreshToken_not_starts_with_i?:string,
	refreshToken_ends_with_i?:string,
	refreshToken_not_ends_with_i?:string,
	refreshToken_in?:(string | undefined)[],
	refreshToken_not_in?:(string | undefined)[],
	item?:ValueTypes["UserWhereInput"],
	item_is_null?:boolean
};
	["PassportSessionWhereUniqueInput"]: {
	id:string
};
	["Purchase"]: AliasType<{
	_label_?:true,
	id?:true,
	item?:ValueTypes["Offering"],
	business?:ValueTypes["Business"],
	user?:ValueTypes["User"]
		__typename?: true
}>;
	["PurchaseCreateInput"]: {
	item?:ValueTypes["OfferingRelateToOneInput"],
	business?:ValueTypes["BusinessRelateToOneInput"],
	user?:ValueTypes["UserRelateToOneInput"]
};
	["PurchasesCreateInput"]: {
	data?:ValueTypes["PurchaseCreateInput"]
};
	["PurchasesUpdateInput"]: {
	id:string,
	data?:ValueTypes["PurchaseUpdateInput"]
};
	["PurchaseUpdateInput"]: {
	item?:ValueTypes["OfferingRelateToOneInput"],
	business?:ValueTypes["BusinessRelateToOneInput"],
	user?:ValueTypes["UserRelateToOneInput"]
};
	["PurchaseWhereInput"]: {
	AND?:(ValueTypes["PurchaseWhereInput"] | undefined)[],
	OR?:(ValueTypes["PurchaseWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	item?:ValueTypes["OfferingWhereInput"],
	item_is_null?:boolean,
	business?:ValueTypes["BusinessWhereInput"],
	business_is_null?:boolean,
	user?:ValueTypes["UserWhereInput"],
	user_is_null?:boolean
};
	["PurchaseWhereUniqueInput"]: {
	id:string
};
	["Query"]: AliasType<{
allUsers?: [{	where?:ValueTypes["UserWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["User"]],
User?: [{	where:ValueTypes["UserWhereUniqueInput"]},ValueTypes["User"]],
_allUsersMeta?: [{	where?:ValueTypes["UserWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_UsersMeta?:ValueTypes["_ListMeta"],
allBusinesses?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["Business"]],
Business?: [{	where:ValueTypes["BusinessWhereUniqueInput"]},ValueTypes["Business"]],
_allBusinessesMeta?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_BusinessesMeta?:ValueTypes["_ListMeta"],
allOfferings?: [{	where?:ValueTypes["OfferingWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["Offering"]],
Offering?: [{	where:ValueTypes["OfferingWhereUniqueInput"]},ValueTypes["Offering"]],
_allOfferingsMeta?: [{	where?:ValueTypes["OfferingWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_OfferingsMeta?:ValueTypes["_ListMeta"],
allPurchases?: [{	where?:ValueTypes["PurchaseWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["Purchase"]],
Purchase?: [{	where:ValueTypes["PurchaseWhereUniqueInput"]},ValueTypes["Purchase"]],
_allPurchasesMeta?: [{	where?:ValueTypes["PurchaseWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_PurchasesMeta?:ValueTypes["_ListMeta"],
allStaffNames?: [{	where?:ValueTypes["StaffNameWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["StaffName"]],
StaffName?: [{	where:ValueTypes["StaffNameWhereUniqueInput"]},ValueTypes["StaffName"]],
_allStaffNamesMeta?: [{	where?:ValueTypes["StaffNameWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_StaffNamesMeta?:ValueTypes["_ListMeta"],
allForgottenPasswordTokens?: [{	where?:ValueTypes["ForgottenPasswordTokenWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["ForgottenPasswordToken"]],
ForgottenPasswordToken?: [{	where:ValueTypes["ForgottenPasswordTokenWhereUniqueInput"]},ValueTypes["ForgottenPasswordToken"]],
_allForgottenPasswordTokensMeta?: [{	where?:ValueTypes["ForgottenPasswordTokenWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_ForgottenPasswordTokensMeta?:ValueTypes["_ListMeta"],
allBlockContents?: [{	where?:ValueTypes["BlockContentWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["BlockContent"]],
BlockContent?: [{	where:ValueTypes["BlockContentWhereUniqueInput"]},ValueTypes["BlockContent"]],
_allBlockContentsMeta?: [{	where?:ValueTypes["BlockContentWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_BlockContentsMeta?:ValueTypes["_ListMeta"],
allContentPages?: [{	where?:ValueTypes["ContentPageWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["ContentPage"]],
ContentPage?: [{	where:ValueTypes["ContentPageWhereUniqueInput"]},ValueTypes["ContentPage"]],
_allContentPagesMeta?: [{	where?:ValueTypes["ContentPageWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_ContentPagesMeta?:ValueTypes["_ListMeta"],
allPassportSessions?: [{	where?:ValueTypes["PassportSessionWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["passportSession"]],
PassportSession?: [{	where:ValueTypes["PassportSessionWhereUniqueInput"]},ValueTypes["passportSession"]],
_allPassportSessionsMeta?: [{	where?:ValueTypes["PassportSessionWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	_PassportSessionsMeta?:ValueTypes["_ListMeta"],
	_ksListsMeta?:ValueTypes["_ListMeta"],
	appVersion?:true,
	authenticatedUser?:ValueTypes["User"]
		__typename?: true
}>;
	["StaffName"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	position?:true,
	useraccount?:ValueTypes["User"],
	photo?:ValueTypes["CloudinaryImage_File"],
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["StaffNameCreateInput"]: {
	name?:string,
	position?:string,
	useraccount?:ValueTypes["UserRelateToOneInput"],
	photo?:ValueTypes["Upload"]
};
	["StaffNameRelateToManyInput"]: {
	create?:(ValueTypes["StaffNameCreateInput"] | undefined)[],
	connect?:(ValueTypes["StaffNameWhereUniqueInput"] | undefined)[],
	disconnect?:(ValueTypes["StaffNameWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
};
	["StaffNamesCreateInput"]: {
	data?:ValueTypes["StaffNameCreateInput"]
};
	["StaffNamesUpdateInput"]: {
	id:string,
	data?:ValueTypes["StaffNameUpdateInput"]
};
	["StaffNameUpdateInput"]: {
	name?:string,
	position?:string,
	useraccount?:ValueTypes["UserRelateToOneInput"],
	photo?:ValueTypes["Upload"]
};
	["StaffNameWhereInput"]: {
	AND?:(ValueTypes["StaffNameWhereInput"] | undefined)[],
	OR?:(ValueTypes["StaffNameWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	position?:string,
	position_not?:string,
	position_contains?:string,
	position_not_contains?:string,
	position_starts_with?:string,
	position_not_starts_with?:string,
	position_ends_with?:string,
	position_not_ends_with?:string,
	position_i?:string,
	position_not_i?:string,
	position_contains_i?:string,
	position_not_contains_i?:string,
	position_starts_with_i?:string,
	position_not_starts_with_i?:string,
	position_ends_with_i?:string,
	position_not_ends_with_i?:string,
	position_in?:(string | undefined)[],
	position_not_in?:(string | undefined)[],
	useraccount?:ValueTypes["UserWhereInput"],
	useraccount_is_null?:boolean,
	photo?:string,
	photo_not?:string,
	photo_contains?:string,
	photo_not_contains?:string,
	photo_starts_with?:string,
	photo_not_starts_with?:string,
	photo_ends_with?:string,
	photo_not_ends_with?:string,
	photo_in?:(string | undefined)[],
	photo_not_in?:(string | undefined)[],
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["StaffNameWhereUniqueInput"]: {
	id:string
};
	["unauthenticateUserOutput"]: AliasType<{
	success?:true
		__typename?: true
}>;
	["Upload"]:unknown;
	["User"]: AliasType<{
	_label_?:true,
	id?:true,
	name?:true,
	email?:true,
	password_is_set?:true,
	isAdmin?:true,
	isBusiness?:true,
	favoriteFood?:true,
	twitterHandle?:true,
	yelpUrl?:true,
	username?:true,
	googleId?:true,
	facebookId?:true,
	userSlug?:true,
	image?:ValueTypes["CloudinaryImage_File"],
	lastLogin?:true,
managingBusinesses?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["Business"]],
_managingBusinessesMeta?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
backing?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["Business"]],
_backingMeta?: [{	where?:ValueTypes["BusinessWhereInput"],	search?:string,	orderBy?:string,	first?:number,	skip?:number},ValueTypes["_QueryMeta"]],
	updatedAt?:true,
	createdAt?:true,
	updatedBy?:ValueTypes["User"],
	createdBy?:ValueTypes["User"]
		__typename?: true
}>;
	["UserCreateInput"]: {
	name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:ValueTypes["Upload"],
	lastLogin?:string,
	managingBusinesses?:ValueTypes["BusinessRelateToManyInput"],
	backing?:ValueTypes["BusinessRelateToManyInput"]
};
	["UserRelateToManyInput"]: {
	create?:(ValueTypes["UserCreateInput"] | undefined)[],
	connect?:(ValueTypes["UserWhereUniqueInput"] | undefined)[],
	disconnect?:(ValueTypes["UserWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
};
	["UserRelateToOneInput"]: {
	create?:ValueTypes["UserCreateInput"],
	connect?:ValueTypes["UserWhereUniqueInput"],
	disconnect?:ValueTypes["UserWhereUniqueInput"],
	disconnectAll?:boolean
};
	["UsersCreateInput"]: {
	data?:ValueTypes["UserCreateInput"]
};
	["UsersUpdateInput"]: {
	id:string,
	data?:ValueTypes["UserUpdateInput"]
};
	["UserUpdateInput"]: {
	name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:ValueTypes["Upload"],
	lastLogin?:string,
	managingBusinesses?:ValueTypes["BusinessRelateToManyInput"],
	backing?:ValueTypes["BusinessRelateToManyInput"]
};
	["UserWhereInput"]: {
	AND?:(ValueTypes["UserWhereInput"] | undefined)[],
	OR?:(ValueTypes["UserWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	email?:string,
	email_not?:string,
	email_contains?:string,
	email_not_contains?:string,
	email_starts_with?:string,
	email_not_starts_with?:string,
	email_ends_with?:string,
	email_not_ends_with?:string,
	email_i?:string,
	email_not_i?:string,
	email_contains_i?:string,
	email_not_contains_i?:string,
	email_starts_with_i?:string,
	email_not_starts_with_i?:string,
	email_ends_with_i?:string,
	email_not_ends_with_i?:string,
	email_in?:(string | undefined)[],
	email_not_in?:(string | undefined)[],
	password_is_set?:boolean,
	isAdmin?:boolean,
	isAdmin_not?:boolean,
	isBusiness?:boolean,
	isBusiness_not?:boolean,
	favoriteFood?:string,
	favoriteFood_not?:string,
	favoriteFood_contains?:string,
	favoriteFood_not_contains?:string,
	favoriteFood_starts_with?:string,
	favoriteFood_not_starts_with?:string,
	favoriteFood_ends_with?:string,
	favoriteFood_not_ends_with?:string,
	favoriteFood_i?:string,
	favoriteFood_not_i?:string,
	favoriteFood_contains_i?:string,
	favoriteFood_not_contains_i?:string,
	favoriteFood_starts_with_i?:string,
	favoriteFood_not_starts_with_i?:string,
	favoriteFood_ends_with_i?:string,
	favoriteFood_not_ends_with_i?:string,
	favoriteFood_in?:(string | undefined)[],
	favoriteFood_not_in?:(string | undefined)[],
	twitterHandle?:string,
	twitterHandle_not?:string,
	twitterHandle_contains?:string,
	twitterHandle_not_contains?:string,
	twitterHandle_starts_with?:string,
	twitterHandle_not_starts_with?:string,
	twitterHandle_ends_with?:string,
	twitterHandle_not_ends_with?:string,
	twitterHandle_i?:string,
	twitterHandle_not_i?:string,
	twitterHandle_contains_i?:string,
	twitterHandle_not_contains_i?:string,
	twitterHandle_starts_with_i?:string,
	twitterHandle_not_starts_with_i?:string,
	twitterHandle_ends_with_i?:string,
	twitterHandle_not_ends_with_i?:string,
	twitterHandle_in?:(string | undefined)[],
	twitterHandle_not_in?:(string | undefined)[],
	yelpUrl?:string,
	yelpUrl_not?:string,
	yelpUrl_contains?:string,
	yelpUrl_not_contains?:string,
	yelpUrl_starts_with?:string,
	yelpUrl_not_starts_with?:string,
	yelpUrl_ends_with?:string,
	yelpUrl_not_ends_with?:string,
	yelpUrl_i?:string,
	yelpUrl_not_i?:string,
	yelpUrl_contains_i?:string,
	yelpUrl_not_contains_i?:string,
	yelpUrl_starts_with_i?:string,
	yelpUrl_not_starts_with_i?:string,
	yelpUrl_ends_with_i?:string,
	yelpUrl_not_ends_with_i?:string,
	yelpUrl_in?:(string | undefined)[],
	yelpUrl_not_in?:(string | undefined)[],
	username?:string,
	username_not?:string,
	username_contains?:string,
	username_not_contains?:string,
	username_starts_with?:string,
	username_not_starts_with?:string,
	username_ends_with?:string,
	username_not_ends_with?:string,
	username_i?:string,
	username_not_i?:string,
	username_contains_i?:string,
	username_not_contains_i?:string,
	username_starts_with_i?:string,
	username_not_starts_with_i?:string,
	username_ends_with_i?:string,
	username_not_ends_with_i?:string,
	username_in?:(string | undefined)[],
	username_not_in?:(string | undefined)[],
	googleId?:string,
	googleId_not?:string,
	googleId_contains?:string,
	googleId_not_contains?:string,
	googleId_starts_with?:string,
	googleId_not_starts_with?:string,
	googleId_ends_with?:string,
	googleId_not_ends_with?:string,
	googleId_i?:string,
	googleId_not_i?:string,
	googleId_contains_i?:string,
	googleId_not_contains_i?:string,
	googleId_starts_with_i?:string,
	googleId_not_starts_with_i?:string,
	googleId_ends_with_i?:string,
	googleId_not_ends_with_i?:string,
	googleId_in?:(string | undefined)[],
	googleId_not_in?:(string | undefined)[],
	facebookId?:string,
	facebookId_not?:string,
	facebookId_contains?:string,
	facebookId_not_contains?:string,
	facebookId_starts_with?:string,
	facebookId_not_starts_with?:string,
	facebookId_ends_with?:string,
	facebookId_not_ends_with?:string,
	facebookId_i?:string,
	facebookId_not_i?:string,
	facebookId_contains_i?:string,
	facebookId_not_contains_i?:string,
	facebookId_starts_with_i?:string,
	facebookId_not_starts_with_i?:string,
	facebookId_ends_with_i?:string,
	facebookId_not_ends_with_i?:string,
	facebookId_in?:(string | undefined)[],
	facebookId_not_in?:(string | undefined)[],
	userSlug?:string,
	userSlug_not?:string,
	userSlug_contains?:string,
	userSlug_not_contains?:string,
	userSlug_starts_with?:string,
	userSlug_not_starts_with?:string,
	userSlug_ends_with?:string,
	userSlug_not_ends_with?:string,
	userSlug_i?:string,
	userSlug_not_i?:string,
	userSlug_contains_i?:string,
	userSlug_not_contains_i?:string,
	userSlug_starts_with_i?:string,
	userSlug_not_starts_with_i?:string,
	userSlug_ends_with_i?:string,
	userSlug_not_ends_with_i?:string,
	userSlug_in?:(string | undefined)[],
	userSlug_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	lastLogin?:string,
	lastLogin_not?:string,
	lastLogin_lt?:string,
	lastLogin_lte?:string,
	lastLogin_gt?:string,
	lastLogin_gte?:string,
	lastLogin_in?:(string | undefined)[],
	lastLogin_not_in?:(string | undefined)[],
	managingBusinesses_every?:ValueTypes["BusinessWhereInput"],
	managingBusinesses_some?:ValueTypes["BusinessWhereInput"],
	managingBusinesses_none?:ValueTypes["BusinessWhereInput"],
	managingBusinesses_is_null?:boolean,
	backing_every?:ValueTypes["BusinessWhereInput"],
	backing_some?:ValueTypes["BusinessWhereInput"],
	backing_none?:ValueTypes["BusinessWhereInput"],
	backing_is_null?:boolean,
	updatedAt?:ValueTypes["DateTime"],
	updatedAt_not?:ValueTypes["DateTime"],
	updatedAt_lt?:ValueTypes["DateTime"],
	updatedAt_lte?:ValueTypes["DateTime"],
	updatedAt_gt?:ValueTypes["DateTime"],
	updatedAt_gte?:ValueTypes["DateTime"],
	updatedAt_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt?:ValueTypes["DateTime"],
	createdAt_not?:ValueTypes["DateTime"],
	createdAt_lt?:ValueTypes["DateTime"],
	createdAt_lte?:ValueTypes["DateTime"],
	createdAt_gt?:ValueTypes["DateTime"],
	createdAt_gte?:ValueTypes["DateTime"],
	createdAt_in?:(ValueTypes["DateTime"] | undefined)[],
	createdAt_not_in?:(ValueTypes["DateTime"] | undefined)[],
	updatedBy?:ValueTypes["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:ValueTypes["UserWhereInput"],
	createdBy_is_null?:boolean
};
	["UserWhereUniqueInput"]: {
	id:string
}
  }

export type PartialObjects = {
    ["_ListAccess"]: {
		__typename?: "_ListAccess";
			create?:boolean,
			read?:PartialObjects["JSON"],
			update?:PartialObjects["JSON"],
			delete?:PartialObjects["JSON"],
			auth?:PartialObjects["JSON"]
	},
	["_ListMeta"]: {
		__typename?: "_ListMeta";
			name?:string,
			access?:PartialObjects["_ListAccess"],
			schema?:PartialObjects["_ListSchema"]
	},
	["_ListSchema"]: {
		__typename?: "_ListSchema";
			type?:string,
			queries?:(string | undefined)[],
			relatedFields?:(PartialObjects["_ListSchemaRelatedFields"] | undefined)[]
	},
	["_ListSchemaRelatedFields"]: {
		__typename?: "_ListSchemaRelatedFields";
			type?:string,
			fields?:(string | undefined)[]
	},
	["_QueryMeta"]: {
		__typename?: "_QueryMeta";
			count?:number
	},
	["authenticateUserOutput"]: {
		__typename?: "authenticateUserOutput";
			token?:string,
			item?:PartialObjects["User"]
	},
	["BlockContent"]: {
		__typename?: "BlockContent";
			_label_?:string,
			id?:string,
			name?:string,
			title?:string,
			subtitle?:string,
			hero?:PartialObjects["File"],
			image?:PartialObjects["CloudinaryImage_File"],
			textContent?:string,
			richContent?:string,
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["BlockContentCreateInput"]: {
	name?:string,
	title?:string,
	subtitle?:string,
	hero?:PartialObjects["Upload"],
	image?:PartialObjects["Upload"],
	textContent?:string,
	richContent?:string
},
	["BlockContentRelateToManyInput"]: {
	create?:(PartialObjects["BlockContentCreateInput"] | undefined)[],
	connect?:(PartialObjects["BlockContentWhereUniqueInput"] | undefined)[],
	disconnect?:(PartialObjects["BlockContentWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
},
	["BlockContentsCreateInput"]: {
	data?:PartialObjects["BlockContentCreateInput"]
},
	["BlockContentsUpdateInput"]: {
	id:string,
	data?:PartialObjects["BlockContentUpdateInput"]
},
	["BlockContentUpdateInput"]: {
	name?:string,
	title?:string,
	subtitle?:string,
	hero?:PartialObjects["Upload"],
	image?:PartialObjects["Upload"],
	textContent?:string,
	richContent?:string
},
	["BlockContentWhereInput"]: {
	AND?:(PartialObjects["BlockContentWhereInput"] | undefined)[],
	OR?:(PartialObjects["BlockContentWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	title?:string,
	title_not?:string,
	title_contains?:string,
	title_not_contains?:string,
	title_starts_with?:string,
	title_not_starts_with?:string,
	title_ends_with?:string,
	title_not_ends_with?:string,
	title_i?:string,
	title_not_i?:string,
	title_contains_i?:string,
	title_not_contains_i?:string,
	title_starts_with_i?:string,
	title_not_starts_with_i?:string,
	title_ends_with_i?:string,
	title_not_ends_with_i?:string,
	title_in?:(string | undefined)[],
	title_not_in?:(string | undefined)[],
	subtitle?:string,
	subtitle_not?:string,
	subtitle_contains?:string,
	subtitle_not_contains?:string,
	subtitle_starts_with?:string,
	subtitle_not_starts_with?:string,
	subtitle_ends_with?:string,
	subtitle_not_ends_with?:string,
	subtitle_i?:string,
	subtitle_not_i?:string,
	subtitle_contains_i?:string,
	subtitle_not_contains_i?:string,
	subtitle_starts_with_i?:string,
	subtitle_not_starts_with_i?:string,
	subtitle_ends_with_i?:string,
	subtitle_not_ends_with_i?:string,
	subtitle_in?:(string | undefined)[],
	subtitle_not_in?:(string | undefined)[],
	hero?:string,
	hero_not?:string,
	hero_contains?:string,
	hero_not_contains?:string,
	hero_starts_with?:string,
	hero_not_starts_with?:string,
	hero_ends_with?:string,
	hero_not_ends_with?:string,
	hero_in?:(string | undefined)[],
	hero_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	textContent?:string,
	textContent_not?:string,
	textContent_contains?:string,
	textContent_not_contains?:string,
	textContent_starts_with?:string,
	textContent_not_starts_with?:string,
	textContent_ends_with?:string,
	textContent_not_ends_with?:string,
	textContent_i?:string,
	textContent_not_i?:string,
	textContent_contains_i?:string,
	textContent_not_contains_i?:string,
	textContent_starts_with_i?:string,
	textContent_not_starts_with_i?:string,
	textContent_ends_with_i?:string,
	textContent_not_ends_with_i?:string,
	textContent_in?:(string | undefined)[],
	textContent_not_in?:(string | undefined)[],
	richContent?:string,
	richContent_not?:string,
	richContent_contains?:string,
	richContent_not_contains?:string,
	richContent_starts_with?:string,
	richContent_not_starts_with?:string,
	richContent_ends_with?:string,
	richContent_not_ends_with?:string,
	richContent_i?:string,
	richContent_not_i?:string,
	richContent_contains_i?:string,
	richContent_not_contains_i?:string,
	richContent_starts_with_i?:string,
	richContent_not_starts_with_i?:string,
	richContent_ends_with_i?:string,
	richContent_not_ends_with_i?:string,
	richContent_in?:(string | undefined)[],
	richContent_not_in?:(string | undefined)[],
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["BlockContentWhereUniqueInput"]: {
	id:string
},
	["Business"]: {
		__typename?: "Business";
			_label_?:string,
			id?:string,
			name?:string,
			description?:string,
			owner?:PartialObjects["User"],
			staffMembers?:(PartialObjects["StaffName"] | undefined)[],
			_staffMembersMeta?:PartialObjects["_QueryMeta"],
			profileImage?:PartialObjects["CloudinaryImage_File"],
			heroImage?:PartialObjects["CloudinaryImage_File"],
			themeColor?:string,
			location?:PartialObjects["Location"],
			businessSlug?:string,
			backers?:(PartialObjects["User"] | undefined)[],
			_backersMeta?:PartialObjects["_QueryMeta"],
			status?:PartialObjects["BusinessStatusType"],
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["BusinessCreateInput"]: {
	name?:string,
	description?:string,
	owner?:PartialObjects["UserRelateToOneInput"],
	staffMembers?:PartialObjects["StaffNameRelateToManyInput"],
	profileImage?:PartialObjects["Upload"],
	heroImage?:PartialObjects["Upload"],
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:PartialObjects["UserRelateToManyInput"],
	status?:PartialObjects["BusinessStatusType"]
},
	["BusinessesCreateInput"]: {
	data?:PartialObjects["BusinessCreateInput"]
},
	["BusinessesUpdateInput"]: {
	id:string,
	data?:PartialObjects["BusinessUpdateInput"]
},
	["BusinessRelateToManyInput"]: {
	create?:(PartialObjects["BusinessCreateInput"] | undefined)[],
	connect?:(PartialObjects["BusinessWhereUniqueInput"] | undefined)[],
	disconnect?:(PartialObjects["BusinessWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
},
	["BusinessRelateToOneInput"]: {
	create?:PartialObjects["BusinessCreateInput"],
	connect?:PartialObjects["BusinessWhereUniqueInput"],
	disconnect?:PartialObjects["BusinessWhereUniqueInput"],
	disconnectAll?:boolean
},
	["BusinessStatusType"]:BusinessStatusType,
	["BusinessUpdateInput"]: {
	name?:string,
	description?:string,
	owner?:PartialObjects["UserRelateToOneInput"],
	staffMembers?:PartialObjects["StaffNameRelateToManyInput"],
	profileImage?:PartialObjects["Upload"],
	heroImage?:PartialObjects["Upload"],
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:PartialObjects["UserRelateToManyInput"],
	status?:PartialObjects["BusinessStatusType"]
},
	["BusinessWhereInput"]: {
	AND?:(PartialObjects["BusinessWhereInput"] | undefined)[],
	OR?:(PartialObjects["BusinessWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	owner?:PartialObjects["UserWhereInput"],
	owner_is_null?:boolean,
	staffMembers_every?:PartialObjects["StaffNameWhereInput"],
	staffMembers_some?:PartialObjects["StaffNameWhereInput"],
	staffMembers_none?:PartialObjects["StaffNameWhereInput"],
	staffMembers_is_null?:boolean,
	profileImage?:string,
	profileImage_not?:string,
	profileImage_contains?:string,
	profileImage_not_contains?:string,
	profileImage_starts_with?:string,
	profileImage_not_starts_with?:string,
	profileImage_ends_with?:string,
	profileImage_not_ends_with?:string,
	profileImage_in?:(string | undefined)[],
	profileImage_not_in?:(string | undefined)[],
	heroImage?:string,
	heroImage_not?:string,
	heroImage_contains?:string,
	heroImage_not_contains?:string,
	heroImage_starts_with?:string,
	heroImage_not_starts_with?:string,
	heroImage_ends_with?:string,
	heroImage_not_ends_with?:string,
	heroImage_in?:(string | undefined)[],
	heroImage_not_in?:(string | undefined)[],
	themeColor?:string,
	themeColor_not?:string,
	themeColor_contains?:string,
	themeColor_not_contains?:string,
	themeColor_starts_with?:string,
	themeColor_not_starts_with?:string,
	themeColor_ends_with?:string,
	themeColor_not_ends_with?:string,
	themeColor_i?:string,
	themeColor_not_i?:string,
	themeColor_contains_i?:string,
	themeColor_not_contains_i?:string,
	themeColor_starts_with_i?:string,
	themeColor_not_starts_with_i?:string,
	themeColor_ends_with_i?:string,
	themeColor_not_ends_with_i?:string,
	themeColor_in?:(string | undefined)[],
	themeColor_not_in?:(string | undefined)[],
	location?:string,
	location_not?:string,
	location_contains?:string,
	location_not_contains?:string,
	location_starts_with?:string,
	location_not_starts_with?:string,
	location_ends_with?:string,
	location_not_ends_with?:string,
	location_in?:(string | undefined)[],
	location_not_in?:(string | undefined)[],
	businessSlug?:string,
	businessSlug_not?:string,
	businessSlug_contains?:string,
	businessSlug_not_contains?:string,
	businessSlug_starts_with?:string,
	businessSlug_not_starts_with?:string,
	businessSlug_ends_with?:string,
	businessSlug_not_ends_with?:string,
	businessSlug_i?:string,
	businessSlug_not_i?:string,
	businessSlug_contains_i?:string,
	businessSlug_not_contains_i?:string,
	businessSlug_starts_with_i?:string,
	businessSlug_not_starts_with_i?:string,
	businessSlug_ends_with_i?:string,
	businessSlug_not_ends_with_i?:string,
	businessSlug_in?:(string | undefined)[],
	businessSlug_not_in?:(string | undefined)[],
	backers_every?:PartialObjects["UserWhereInput"],
	backers_some?:PartialObjects["UserWhereInput"],
	backers_none?:PartialObjects["UserWhereInput"],
	backers_is_null?:boolean,
	status?:PartialObjects["BusinessStatusType"],
	status_not?:PartialObjects["BusinessStatusType"],
	status_in?:(PartialObjects["BusinessStatusType"] | undefined)[],
	status_not_in?:(PartialObjects["BusinessStatusType"] | undefined)[],
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["BusinessWhereUniqueInput"]: {
	id:string
},
	["CacheControlScope"]:CacheControlScope,
	["CloudinaryImage_File"]: {
		__typename?: "CloudinaryImage_File";
			id?:string,
			path?:string,
			filename?:string,
			originalFilename?:string,
			mimetype?:string,
			encoding?:string,
			publicUrl?:string,
			publicUrlTransformed?:string
	},
	["CloudinaryImageFormat"]: {
	prettyName?:string,
	width?:string,
	height?:string,
	crop?:string,
	aspect_ratio?:string,
	gravity?:string,
	zoom?:string,
	x?:string,
	y?:string,
	format?:string,
	fetch_format?:string,
	quality?:string,
	radius?:string,
	angle?:string,
	effect?:string,
	opacity?:string,
	border?:string,
	background?:string,
	overlay?:string,
	underlay?:string,
	default_image?:string,
	delay?:string,
	color?:string,
	color_space?:string,
	dpr?:string,
	page?:string,
	density?:string,
	flags?:string,
	transformation?:string
},
	["ContentPage"]: {
		__typename?: "ContentPage";
			_label_?:string,
			id?:string,
			name?:string,
			slug?:string,
			status?:PartialObjects["ContentPageStatusType"],
			blocks?:(PartialObjects["BlockContent"] | undefined)[],
			_blocksMeta?:PartialObjects["_QueryMeta"],
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["ContentPageCreateInput"]: {
	name?:string,
	slug?:string,
	status?:PartialObjects["ContentPageStatusType"],
	blocks?:PartialObjects["BlockContentRelateToManyInput"]
},
	["ContentPagesCreateInput"]: {
	data?:PartialObjects["ContentPageCreateInput"]
},
	["ContentPageStatusType"]:ContentPageStatusType,
	["ContentPagesUpdateInput"]: {
	id:string,
	data?:PartialObjects["ContentPageUpdateInput"]
},
	["ContentPageUpdateInput"]: {
	name?:string,
	slug?:string,
	status?:PartialObjects["ContentPageStatusType"],
	blocks?:PartialObjects["BlockContentRelateToManyInput"]
},
	["ContentPageWhereInput"]: {
	AND?:(PartialObjects["ContentPageWhereInput"] | undefined)[],
	OR?:(PartialObjects["ContentPageWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	slug?:string,
	slug_not?:string,
	slug_contains?:string,
	slug_not_contains?:string,
	slug_starts_with?:string,
	slug_not_starts_with?:string,
	slug_ends_with?:string,
	slug_not_ends_with?:string,
	slug_i?:string,
	slug_not_i?:string,
	slug_contains_i?:string,
	slug_not_contains_i?:string,
	slug_starts_with_i?:string,
	slug_not_starts_with_i?:string,
	slug_ends_with_i?:string,
	slug_not_ends_with_i?:string,
	slug_in?:(string | undefined)[],
	slug_not_in?:(string | undefined)[],
	status?:PartialObjects["ContentPageStatusType"],
	status_not?:PartialObjects["ContentPageStatusType"],
	status_in?:(PartialObjects["ContentPageStatusType"] | undefined)[],
	status_not_in?:(PartialObjects["ContentPageStatusType"] | undefined)[],
	blocks_every?:PartialObjects["BlockContentWhereInput"],
	blocks_some?:PartialObjects["BlockContentWhereInput"],
	blocks_none?:PartialObjects["BlockContentWhereInput"],
	blocks_is_null?:boolean,
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["ContentPageWhereUniqueInput"]: {
	id:string
},
	["DateTime"]:any,
	["File"]: {
		__typename?: "File";
			id?:string,
			path?:string,
			filename?:string,
			originalFilename?:string,
			mimetype?:string,
			encoding?:string,
			publicUrl?:string
	},
	["ForgottenPasswordToken"]: {
		__typename?: "ForgottenPasswordToken";
			_label_?:string,
			id?:string,
			user?:PartialObjects["User"],
			token?:string,
			requestedAt?:PartialObjects["DateTime"],
			accessedAt?:PartialObjects["DateTime"],
			expiresAt?:PartialObjects["DateTime"],
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["ForgottenPasswordTokenCreateInput"]: {
	user?:PartialObjects["UserRelateToOneInput"],
	token?:string,
	requestedAt?:PartialObjects["DateTime"],
	accessedAt?:PartialObjects["DateTime"],
	expiresAt?:PartialObjects["DateTime"]
},
	["ForgottenPasswordTokensCreateInput"]: {
	data?:PartialObjects["ForgottenPasswordTokenCreateInput"]
},
	["ForgottenPasswordTokensUpdateInput"]: {
	id:string,
	data?:PartialObjects["ForgottenPasswordTokenUpdateInput"]
},
	["ForgottenPasswordTokenUpdateInput"]: {
	user?:PartialObjects["UserRelateToOneInput"],
	token?:string,
	requestedAt?:PartialObjects["DateTime"],
	accessedAt?:PartialObjects["DateTime"],
	expiresAt?:PartialObjects["DateTime"]
},
	["ForgottenPasswordTokenWhereInput"]: {
	AND?:(PartialObjects["ForgottenPasswordTokenWhereInput"] | undefined)[],
	OR?:(PartialObjects["ForgottenPasswordTokenWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	user?:PartialObjects["UserWhereInput"],
	user_is_null?:boolean,
	token?:string,
	token_not?:string,
	token_contains?:string,
	token_not_contains?:string,
	token_starts_with?:string,
	token_not_starts_with?:string,
	token_ends_with?:string,
	token_not_ends_with?:string,
	token_i?:string,
	token_not_i?:string,
	token_contains_i?:string,
	token_not_contains_i?:string,
	token_starts_with_i?:string,
	token_not_starts_with_i?:string,
	token_ends_with_i?:string,
	token_not_ends_with_i?:string,
	token_in?:(string | undefined)[],
	token_not_in?:(string | undefined)[],
	requestedAt?:PartialObjects["DateTime"],
	requestedAt_not?:PartialObjects["DateTime"],
	requestedAt_lt?:PartialObjects["DateTime"],
	requestedAt_lte?:PartialObjects["DateTime"],
	requestedAt_gt?:PartialObjects["DateTime"],
	requestedAt_gte?:PartialObjects["DateTime"],
	requestedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	requestedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	accessedAt?:PartialObjects["DateTime"],
	accessedAt_not?:PartialObjects["DateTime"],
	accessedAt_lt?:PartialObjects["DateTime"],
	accessedAt_lte?:PartialObjects["DateTime"],
	accessedAt_gt?:PartialObjects["DateTime"],
	accessedAt_gte?:PartialObjects["DateTime"],
	accessedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	accessedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	expiresAt?:PartialObjects["DateTime"],
	expiresAt_not?:PartialObjects["DateTime"],
	expiresAt_lt?:PartialObjects["DateTime"],
	expiresAt_lte?:PartialObjects["DateTime"],
	expiresAt_gt?:PartialObjects["DateTime"],
	expiresAt_gte?:PartialObjects["DateTime"],
	expiresAt_in?:(PartialObjects["DateTime"] | undefined)[],
	expiresAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["ForgottenPasswordTokenWhereUniqueInput"]: {
	id:string
},
	["JSON"]:any,
	["Location"]: {
		__typename?: "Location";
			id?:string,
			googlePlaceID?:string,
			formattedAddress?:string,
			lat?:number,
			lng?:number
	},
	["Mutation"]: {
		__typename?: "Mutation";
			createUser?:PartialObjects["User"],
			createUsers?:(PartialObjects["User"] | undefined)[],
			updateUser?:PartialObjects["User"],
			updateUsers?:(PartialObjects["User"] | undefined)[],
			deleteUser?:PartialObjects["User"],
			deleteUsers?:(PartialObjects["User"] | undefined)[],
			createBusiness?:PartialObjects["Business"],
			createBusinesses?:(PartialObjects["Business"] | undefined)[],
			updateBusiness?:PartialObjects["Business"],
			updateBusinesses?:(PartialObjects["Business"] | undefined)[],
			deleteBusiness?:PartialObjects["Business"],
			deleteBusinesses?:(PartialObjects["Business"] | undefined)[],
			createOffering?:PartialObjects["Offering"],
			createOfferings?:(PartialObjects["Offering"] | undefined)[],
			updateOffering?:PartialObjects["Offering"],
			updateOfferings?:(PartialObjects["Offering"] | undefined)[],
			deleteOffering?:PartialObjects["Offering"],
			deleteOfferings?:(PartialObjects["Offering"] | undefined)[],
			createPurchase?:PartialObjects["Purchase"],
			createPurchases?:(PartialObjects["Purchase"] | undefined)[],
			updatePurchase?:PartialObjects["Purchase"],
			updatePurchases?:(PartialObjects["Purchase"] | undefined)[],
			deletePurchase?:PartialObjects["Purchase"],
			deletePurchases?:(PartialObjects["Purchase"] | undefined)[],
			createStaffName?:PartialObjects["StaffName"],
			createStaffNames?:(PartialObjects["StaffName"] | undefined)[],
			updateStaffName?:PartialObjects["StaffName"],
			updateStaffNames?:(PartialObjects["StaffName"] | undefined)[],
			deleteStaffName?:PartialObjects["StaffName"],
			deleteStaffNames?:(PartialObjects["StaffName"] | undefined)[],
			createForgottenPasswordToken?:PartialObjects["ForgottenPasswordToken"],
			createForgottenPasswordTokens?:(PartialObjects["ForgottenPasswordToken"] | undefined)[],
			updateForgottenPasswordToken?:PartialObjects["ForgottenPasswordToken"],
			updateForgottenPasswordTokens?:(PartialObjects["ForgottenPasswordToken"] | undefined)[],
			deleteForgottenPasswordToken?:PartialObjects["ForgottenPasswordToken"],
			deleteForgottenPasswordTokens?:(PartialObjects["ForgottenPasswordToken"] | undefined)[],
			createBlockContent?:PartialObjects["BlockContent"],
			createBlockContents?:(PartialObjects["BlockContent"] | undefined)[],
			updateBlockContent?:PartialObjects["BlockContent"],
			updateBlockContents?:(PartialObjects["BlockContent"] | undefined)[],
			deleteBlockContent?:PartialObjects["BlockContent"],
			deleteBlockContents?:(PartialObjects["BlockContent"] | undefined)[],
			createContentPage?:PartialObjects["ContentPage"],
			createContentPages?:(PartialObjects["ContentPage"] | undefined)[],
			updateContentPage?:PartialObjects["ContentPage"],
			updateContentPages?:(PartialObjects["ContentPage"] | undefined)[],
			deleteContentPage?:PartialObjects["ContentPage"],
			deleteContentPages?:(PartialObjects["ContentPage"] | undefined)[],
			createPassportSession?:PartialObjects["passportSession"],
			createPassportSessions?:(PartialObjects["passportSession"] | undefined)[],
			updatePassportSession?:PartialObjects["passportSession"],
			updatePassportSessions?:(PartialObjects["passportSession"] | undefined)[],
			deletePassportSession?:PartialObjects["passportSession"],
			deletePassportSessions?:(PartialObjects["passportSession"] | undefined)[],
			authenticateUserWithFacebook?:PartialObjects["authenticateUserOutput"],
			unauthenticateUser?:PartialObjects["unauthenticateUserOutput"],
			authenticateUserWithGoogle?:PartialObjects["authenticateUserOutput"],
			authenticateUserWithPassword?:PartialObjects["authenticateUserOutput"]
	},
	["Offering"]: {
		__typename?: "Offering";
			_label_?:string,
			id?:string,
			name?:string,
			details?:string,
			status?:PartialObjects["OfferingStatusType"],
			business?:PartialObjects["Business"],
			price?:string,
			currency?:string,
			description?:string,
			maxSlots?:number,
			iAvailable?:boolean,
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["OfferingCreateInput"]: {
	name?:string,
	details?:string,
	status?:PartialObjects["OfferingStatusType"],
	business?:PartialObjects["BusinessRelateToOneInput"],
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
},
	["OfferingRelateToOneInput"]: {
	create?:PartialObjects["OfferingCreateInput"],
	connect?:PartialObjects["OfferingWhereUniqueInput"],
	disconnect?:PartialObjects["OfferingWhereUniqueInput"],
	disconnectAll?:boolean
},
	["OfferingsCreateInput"]: {
	data?:PartialObjects["OfferingCreateInput"]
},
	["OfferingStatusType"]:OfferingStatusType,
	["OfferingsUpdateInput"]: {
	id:string,
	data?:PartialObjects["OfferingUpdateInput"]
},
	["OfferingUpdateInput"]: {
	name?:string,
	details?:string,
	status?:PartialObjects["OfferingStatusType"],
	business?:PartialObjects["BusinessRelateToOneInput"],
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
},
	["OfferingWhereInput"]: {
	AND?:(PartialObjects["OfferingWhereInput"] | undefined)[],
	OR?:(PartialObjects["OfferingWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	details?:string,
	details_not?:string,
	details_contains?:string,
	details_not_contains?:string,
	details_starts_with?:string,
	details_not_starts_with?:string,
	details_ends_with?:string,
	details_not_ends_with?:string,
	details_i?:string,
	details_not_i?:string,
	details_contains_i?:string,
	details_not_contains_i?:string,
	details_starts_with_i?:string,
	details_not_starts_with_i?:string,
	details_ends_with_i?:string,
	details_not_ends_with_i?:string,
	details_in?:(string | undefined)[],
	details_not_in?:(string | undefined)[],
	status?:PartialObjects["OfferingStatusType"],
	status_not?:PartialObjects["OfferingStatusType"],
	status_in?:(PartialObjects["OfferingStatusType"] | undefined)[],
	status_not_in?:(PartialObjects["OfferingStatusType"] | undefined)[],
	business?:PartialObjects["BusinessWhereInput"],
	business_is_null?:boolean,
	price?:string,
	price_not?:string,
	price_lt?:string,
	price_lte?:string,
	price_gt?:string,
	price_gte?:string,
	price_in?:(string | undefined)[],
	price_not_in?:(string | undefined)[],
	currency?:string,
	currency_not?:string,
	currency_contains?:string,
	currency_not_contains?:string,
	currency_starts_with?:string,
	currency_not_starts_with?:string,
	currency_ends_with?:string,
	currency_not_ends_with?:string,
	currency_i?:string,
	currency_not_i?:string,
	currency_contains_i?:string,
	currency_not_contains_i?:string,
	currency_starts_with_i?:string,
	currency_not_starts_with_i?:string,
	currency_ends_with_i?:string,
	currency_not_ends_with_i?:string,
	currency_in?:(string | undefined)[],
	currency_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	maxSlots?:number,
	maxSlots_not?:number,
	maxSlots_lt?:number,
	maxSlots_lte?:number,
	maxSlots_gt?:number,
	maxSlots_gte?:number,
	maxSlots_in?:(number | undefined)[],
	maxSlots_not_in?:(number | undefined)[],
	iAvailable?:boolean,
	iAvailable_not?:boolean,
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["OfferingWhereUniqueInput"]: {
	id:string
},
	["passportSession"]: {
		__typename?: "passportSession";
			_label_?:string,
			id?:string,
			service?:string,
			serviceUserId?:string,
			tokenSecret?:string,
			refreshToken?:string,
			item?:PartialObjects["User"]
	},
	["PassportSessionCreateInput"]: {
	service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:PartialObjects["UserRelateToOneInput"]
},
	["PassportSessionsCreateInput"]: {
	data?:PartialObjects["PassportSessionCreateInput"]
},
	["PassportSessionsUpdateInput"]: {
	id:string,
	data?:PartialObjects["PassportSessionUpdateInput"]
},
	["PassportSessionUpdateInput"]: {
	service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:PartialObjects["UserRelateToOneInput"]
},
	["PassportSessionWhereInput"]: {
	AND?:(PartialObjects["PassportSessionWhereInput"] | undefined)[],
	OR?:(PartialObjects["PassportSessionWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	service?:string,
	service_not?:string,
	service_contains?:string,
	service_not_contains?:string,
	service_starts_with?:string,
	service_not_starts_with?:string,
	service_ends_with?:string,
	service_not_ends_with?:string,
	service_i?:string,
	service_not_i?:string,
	service_contains_i?:string,
	service_not_contains_i?:string,
	service_starts_with_i?:string,
	service_not_starts_with_i?:string,
	service_ends_with_i?:string,
	service_not_ends_with_i?:string,
	service_in?:(string | undefined)[],
	service_not_in?:(string | undefined)[],
	serviceUserId?:string,
	serviceUserId_not?:string,
	serviceUserId_contains?:string,
	serviceUserId_not_contains?:string,
	serviceUserId_starts_with?:string,
	serviceUserId_not_starts_with?:string,
	serviceUserId_ends_with?:string,
	serviceUserId_not_ends_with?:string,
	serviceUserId_i?:string,
	serviceUserId_not_i?:string,
	serviceUserId_contains_i?:string,
	serviceUserId_not_contains_i?:string,
	serviceUserId_starts_with_i?:string,
	serviceUserId_not_starts_with_i?:string,
	serviceUserId_ends_with_i?:string,
	serviceUserId_not_ends_with_i?:string,
	serviceUserId_in?:(string | undefined)[],
	serviceUserId_not_in?:(string | undefined)[],
	tokenSecret?:string,
	tokenSecret_not?:string,
	tokenSecret_contains?:string,
	tokenSecret_not_contains?:string,
	tokenSecret_starts_with?:string,
	tokenSecret_not_starts_with?:string,
	tokenSecret_ends_with?:string,
	tokenSecret_not_ends_with?:string,
	tokenSecret_i?:string,
	tokenSecret_not_i?:string,
	tokenSecret_contains_i?:string,
	tokenSecret_not_contains_i?:string,
	tokenSecret_starts_with_i?:string,
	tokenSecret_not_starts_with_i?:string,
	tokenSecret_ends_with_i?:string,
	tokenSecret_not_ends_with_i?:string,
	tokenSecret_in?:(string | undefined)[],
	tokenSecret_not_in?:(string | undefined)[],
	refreshToken?:string,
	refreshToken_not?:string,
	refreshToken_contains?:string,
	refreshToken_not_contains?:string,
	refreshToken_starts_with?:string,
	refreshToken_not_starts_with?:string,
	refreshToken_ends_with?:string,
	refreshToken_not_ends_with?:string,
	refreshToken_i?:string,
	refreshToken_not_i?:string,
	refreshToken_contains_i?:string,
	refreshToken_not_contains_i?:string,
	refreshToken_starts_with_i?:string,
	refreshToken_not_starts_with_i?:string,
	refreshToken_ends_with_i?:string,
	refreshToken_not_ends_with_i?:string,
	refreshToken_in?:(string | undefined)[],
	refreshToken_not_in?:(string | undefined)[],
	item?:PartialObjects["UserWhereInput"],
	item_is_null?:boolean
},
	["PassportSessionWhereUniqueInput"]: {
	id:string
},
	["Purchase"]: {
		__typename?: "Purchase";
			_label_?:string,
			id?:string,
			item?:PartialObjects["Offering"],
			business?:PartialObjects["Business"],
			user?:PartialObjects["User"]
	},
	["PurchaseCreateInput"]: {
	item?:PartialObjects["OfferingRelateToOneInput"],
	business?:PartialObjects["BusinessRelateToOneInput"],
	user?:PartialObjects["UserRelateToOneInput"]
},
	["PurchasesCreateInput"]: {
	data?:PartialObjects["PurchaseCreateInput"]
},
	["PurchasesUpdateInput"]: {
	id:string,
	data?:PartialObjects["PurchaseUpdateInput"]
},
	["PurchaseUpdateInput"]: {
	item?:PartialObjects["OfferingRelateToOneInput"],
	business?:PartialObjects["BusinessRelateToOneInput"],
	user?:PartialObjects["UserRelateToOneInput"]
},
	["PurchaseWhereInput"]: {
	AND?:(PartialObjects["PurchaseWhereInput"] | undefined)[],
	OR?:(PartialObjects["PurchaseWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	item?:PartialObjects["OfferingWhereInput"],
	item_is_null?:boolean,
	business?:PartialObjects["BusinessWhereInput"],
	business_is_null?:boolean,
	user?:PartialObjects["UserWhereInput"],
	user_is_null?:boolean
},
	["PurchaseWhereUniqueInput"]: {
	id:string
},
	["Query"]: {
		__typename?: "Query";
			allUsers?:(PartialObjects["User"] | undefined)[],
			User?:PartialObjects["User"],
			_allUsersMeta?:PartialObjects["_QueryMeta"],
			_UsersMeta?:PartialObjects["_ListMeta"],
			allBusinesses?:(PartialObjects["Business"] | undefined)[],
			Business?:PartialObjects["Business"],
			_allBusinessesMeta?:PartialObjects["_QueryMeta"],
			_BusinessesMeta?:PartialObjects["_ListMeta"],
			allOfferings?:(PartialObjects["Offering"] | undefined)[],
			Offering?:PartialObjects["Offering"],
			_allOfferingsMeta?:PartialObjects["_QueryMeta"],
			_OfferingsMeta?:PartialObjects["_ListMeta"],
			allPurchases?:(PartialObjects["Purchase"] | undefined)[],
			Purchase?:PartialObjects["Purchase"],
			_allPurchasesMeta?:PartialObjects["_QueryMeta"],
			_PurchasesMeta?:PartialObjects["_ListMeta"],
			allStaffNames?:(PartialObjects["StaffName"] | undefined)[],
			StaffName?:PartialObjects["StaffName"],
			_allStaffNamesMeta?:PartialObjects["_QueryMeta"],
			_StaffNamesMeta?:PartialObjects["_ListMeta"],
			allForgottenPasswordTokens?:(PartialObjects["ForgottenPasswordToken"] | undefined)[],
			ForgottenPasswordToken?:PartialObjects["ForgottenPasswordToken"],
			_allForgottenPasswordTokensMeta?:PartialObjects["_QueryMeta"],
			_ForgottenPasswordTokensMeta?:PartialObjects["_ListMeta"],
			allBlockContents?:(PartialObjects["BlockContent"] | undefined)[],
			BlockContent?:PartialObjects["BlockContent"],
			_allBlockContentsMeta?:PartialObjects["_QueryMeta"],
			_BlockContentsMeta?:PartialObjects["_ListMeta"],
			allContentPages?:(PartialObjects["ContentPage"] | undefined)[],
			ContentPage?:PartialObjects["ContentPage"],
			_allContentPagesMeta?:PartialObjects["_QueryMeta"],
			_ContentPagesMeta?:PartialObjects["_ListMeta"],
			allPassportSessions?:(PartialObjects["passportSession"] | undefined)[],
			PassportSession?:PartialObjects["passportSession"],
			_allPassportSessionsMeta?:PartialObjects["_QueryMeta"],
			_PassportSessionsMeta?:PartialObjects["_ListMeta"],
			_ksListsMeta?:(PartialObjects["_ListMeta"] | undefined)[],
			appVersion?:string,
			authenticatedUser?:PartialObjects["User"]
	},
	["StaffName"]: {
		__typename?: "StaffName";
			_label_?:string,
			id?:string,
			name?:string,
			position?:string,
			useraccount?:PartialObjects["User"],
			photo?:PartialObjects["CloudinaryImage_File"],
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["StaffNameCreateInput"]: {
	name?:string,
	position?:string,
	useraccount?:PartialObjects["UserRelateToOneInput"],
	photo?:PartialObjects["Upload"]
},
	["StaffNameRelateToManyInput"]: {
	create?:(PartialObjects["StaffNameCreateInput"] | undefined)[],
	connect?:(PartialObjects["StaffNameWhereUniqueInput"] | undefined)[],
	disconnect?:(PartialObjects["StaffNameWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
},
	["StaffNamesCreateInput"]: {
	data?:PartialObjects["StaffNameCreateInput"]
},
	["StaffNamesUpdateInput"]: {
	id:string,
	data?:PartialObjects["StaffNameUpdateInput"]
},
	["StaffNameUpdateInput"]: {
	name?:string,
	position?:string,
	useraccount?:PartialObjects["UserRelateToOneInput"],
	photo?:PartialObjects["Upload"]
},
	["StaffNameWhereInput"]: {
	AND?:(PartialObjects["StaffNameWhereInput"] | undefined)[],
	OR?:(PartialObjects["StaffNameWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	position?:string,
	position_not?:string,
	position_contains?:string,
	position_not_contains?:string,
	position_starts_with?:string,
	position_not_starts_with?:string,
	position_ends_with?:string,
	position_not_ends_with?:string,
	position_i?:string,
	position_not_i?:string,
	position_contains_i?:string,
	position_not_contains_i?:string,
	position_starts_with_i?:string,
	position_not_starts_with_i?:string,
	position_ends_with_i?:string,
	position_not_ends_with_i?:string,
	position_in?:(string | undefined)[],
	position_not_in?:(string | undefined)[],
	useraccount?:PartialObjects["UserWhereInput"],
	useraccount_is_null?:boolean,
	photo?:string,
	photo_not?:string,
	photo_contains?:string,
	photo_not_contains?:string,
	photo_starts_with?:string,
	photo_not_starts_with?:string,
	photo_ends_with?:string,
	photo_not_ends_with?:string,
	photo_in?:(string | undefined)[],
	photo_not_in?:(string | undefined)[],
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["StaffNameWhereUniqueInput"]: {
	id:string
},
	["unauthenticateUserOutput"]: {
		__typename?: "unauthenticateUserOutput";
			success?:boolean
	},
	["Upload"]:any,
	["User"]: {
		__typename?: "User";
			_label_?:string,
			id?:string,
			name?:string,
			email?:string,
			password_is_set?:boolean,
			isAdmin?:boolean,
			isBusiness?:boolean,
			favoriteFood?:string,
			twitterHandle?:string,
			yelpUrl?:string,
			username?:string,
			googleId?:string,
			facebookId?:string,
			userSlug?:string,
			image?:PartialObjects["CloudinaryImage_File"],
			lastLogin?:string,
			managingBusinesses?:(PartialObjects["Business"] | undefined)[],
			_managingBusinessesMeta?:PartialObjects["_QueryMeta"],
			backing?:(PartialObjects["Business"] | undefined)[],
			_backingMeta?:PartialObjects["_QueryMeta"],
			updatedAt?:PartialObjects["DateTime"],
			createdAt?:PartialObjects["DateTime"],
			updatedBy?:PartialObjects["User"],
			createdBy?:PartialObjects["User"]
	},
	["UserCreateInput"]: {
	name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:PartialObjects["Upload"],
	lastLogin?:string,
	managingBusinesses?:PartialObjects["BusinessRelateToManyInput"],
	backing?:PartialObjects["BusinessRelateToManyInput"]
},
	["UserRelateToManyInput"]: {
	create?:(PartialObjects["UserCreateInput"] | undefined)[],
	connect?:(PartialObjects["UserWhereUniqueInput"] | undefined)[],
	disconnect?:(PartialObjects["UserWhereUniqueInput"] | undefined)[],
	disconnectAll?:boolean
},
	["UserRelateToOneInput"]: {
	create?:PartialObjects["UserCreateInput"],
	connect?:PartialObjects["UserWhereUniqueInput"],
	disconnect?:PartialObjects["UserWhereUniqueInput"],
	disconnectAll?:boolean
},
	["UsersCreateInput"]: {
	data?:PartialObjects["UserCreateInput"]
},
	["UsersUpdateInput"]: {
	id:string,
	data?:PartialObjects["UserUpdateInput"]
},
	["UserUpdateInput"]: {
	name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:PartialObjects["Upload"],
	lastLogin?:string,
	managingBusinesses?:PartialObjects["BusinessRelateToManyInput"],
	backing?:PartialObjects["BusinessRelateToManyInput"]
},
	["UserWhereInput"]: {
	AND?:(PartialObjects["UserWhereInput"] | undefined)[],
	OR?:(PartialObjects["UserWhereInput"] | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	email?:string,
	email_not?:string,
	email_contains?:string,
	email_not_contains?:string,
	email_starts_with?:string,
	email_not_starts_with?:string,
	email_ends_with?:string,
	email_not_ends_with?:string,
	email_i?:string,
	email_not_i?:string,
	email_contains_i?:string,
	email_not_contains_i?:string,
	email_starts_with_i?:string,
	email_not_starts_with_i?:string,
	email_ends_with_i?:string,
	email_not_ends_with_i?:string,
	email_in?:(string | undefined)[],
	email_not_in?:(string | undefined)[],
	password_is_set?:boolean,
	isAdmin?:boolean,
	isAdmin_not?:boolean,
	isBusiness?:boolean,
	isBusiness_not?:boolean,
	favoriteFood?:string,
	favoriteFood_not?:string,
	favoriteFood_contains?:string,
	favoriteFood_not_contains?:string,
	favoriteFood_starts_with?:string,
	favoriteFood_not_starts_with?:string,
	favoriteFood_ends_with?:string,
	favoriteFood_not_ends_with?:string,
	favoriteFood_i?:string,
	favoriteFood_not_i?:string,
	favoriteFood_contains_i?:string,
	favoriteFood_not_contains_i?:string,
	favoriteFood_starts_with_i?:string,
	favoriteFood_not_starts_with_i?:string,
	favoriteFood_ends_with_i?:string,
	favoriteFood_not_ends_with_i?:string,
	favoriteFood_in?:(string | undefined)[],
	favoriteFood_not_in?:(string | undefined)[],
	twitterHandle?:string,
	twitterHandle_not?:string,
	twitterHandle_contains?:string,
	twitterHandle_not_contains?:string,
	twitterHandle_starts_with?:string,
	twitterHandle_not_starts_with?:string,
	twitterHandle_ends_with?:string,
	twitterHandle_not_ends_with?:string,
	twitterHandle_i?:string,
	twitterHandle_not_i?:string,
	twitterHandle_contains_i?:string,
	twitterHandle_not_contains_i?:string,
	twitterHandle_starts_with_i?:string,
	twitterHandle_not_starts_with_i?:string,
	twitterHandle_ends_with_i?:string,
	twitterHandle_not_ends_with_i?:string,
	twitterHandle_in?:(string | undefined)[],
	twitterHandle_not_in?:(string | undefined)[],
	yelpUrl?:string,
	yelpUrl_not?:string,
	yelpUrl_contains?:string,
	yelpUrl_not_contains?:string,
	yelpUrl_starts_with?:string,
	yelpUrl_not_starts_with?:string,
	yelpUrl_ends_with?:string,
	yelpUrl_not_ends_with?:string,
	yelpUrl_i?:string,
	yelpUrl_not_i?:string,
	yelpUrl_contains_i?:string,
	yelpUrl_not_contains_i?:string,
	yelpUrl_starts_with_i?:string,
	yelpUrl_not_starts_with_i?:string,
	yelpUrl_ends_with_i?:string,
	yelpUrl_not_ends_with_i?:string,
	yelpUrl_in?:(string | undefined)[],
	yelpUrl_not_in?:(string | undefined)[],
	username?:string,
	username_not?:string,
	username_contains?:string,
	username_not_contains?:string,
	username_starts_with?:string,
	username_not_starts_with?:string,
	username_ends_with?:string,
	username_not_ends_with?:string,
	username_i?:string,
	username_not_i?:string,
	username_contains_i?:string,
	username_not_contains_i?:string,
	username_starts_with_i?:string,
	username_not_starts_with_i?:string,
	username_ends_with_i?:string,
	username_not_ends_with_i?:string,
	username_in?:(string | undefined)[],
	username_not_in?:(string | undefined)[],
	googleId?:string,
	googleId_not?:string,
	googleId_contains?:string,
	googleId_not_contains?:string,
	googleId_starts_with?:string,
	googleId_not_starts_with?:string,
	googleId_ends_with?:string,
	googleId_not_ends_with?:string,
	googleId_i?:string,
	googleId_not_i?:string,
	googleId_contains_i?:string,
	googleId_not_contains_i?:string,
	googleId_starts_with_i?:string,
	googleId_not_starts_with_i?:string,
	googleId_ends_with_i?:string,
	googleId_not_ends_with_i?:string,
	googleId_in?:(string | undefined)[],
	googleId_not_in?:(string | undefined)[],
	facebookId?:string,
	facebookId_not?:string,
	facebookId_contains?:string,
	facebookId_not_contains?:string,
	facebookId_starts_with?:string,
	facebookId_not_starts_with?:string,
	facebookId_ends_with?:string,
	facebookId_not_ends_with?:string,
	facebookId_i?:string,
	facebookId_not_i?:string,
	facebookId_contains_i?:string,
	facebookId_not_contains_i?:string,
	facebookId_starts_with_i?:string,
	facebookId_not_starts_with_i?:string,
	facebookId_ends_with_i?:string,
	facebookId_not_ends_with_i?:string,
	facebookId_in?:(string | undefined)[],
	facebookId_not_in?:(string | undefined)[],
	userSlug?:string,
	userSlug_not?:string,
	userSlug_contains?:string,
	userSlug_not_contains?:string,
	userSlug_starts_with?:string,
	userSlug_not_starts_with?:string,
	userSlug_ends_with?:string,
	userSlug_not_ends_with?:string,
	userSlug_i?:string,
	userSlug_not_i?:string,
	userSlug_contains_i?:string,
	userSlug_not_contains_i?:string,
	userSlug_starts_with_i?:string,
	userSlug_not_starts_with_i?:string,
	userSlug_ends_with_i?:string,
	userSlug_not_ends_with_i?:string,
	userSlug_in?:(string | undefined)[],
	userSlug_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	lastLogin?:string,
	lastLogin_not?:string,
	lastLogin_lt?:string,
	lastLogin_lte?:string,
	lastLogin_gt?:string,
	lastLogin_gte?:string,
	lastLogin_in?:(string | undefined)[],
	lastLogin_not_in?:(string | undefined)[],
	managingBusinesses_every?:PartialObjects["BusinessWhereInput"],
	managingBusinesses_some?:PartialObjects["BusinessWhereInput"],
	managingBusinesses_none?:PartialObjects["BusinessWhereInput"],
	managingBusinesses_is_null?:boolean,
	backing_every?:PartialObjects["BusinessWhereInput"],
	backing_some?:PartialObjects["BusinessWhereInput"],
	backing_none?:PartialObjects["BusinessWhereInput"],
	backing_is_null?:boolean,
	updatedAt?:PartialObjects["DateTime"],
	updatedAt_not?:PartialObjects["DateTime"],
	updatedAt_lt?:PartialObjects["DateTime"],
	updatedAt_lte?:PartialObjects["DateTime"],
	updatedAt_gt?:PartialObjects["DateTime"],
	updatedAt_gte?:PartialObjects["DateTime"],
	updatedAt_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt?:PartialObjects["DateTime"],
	createdAt_not?:PartialObjects["DateTime"],
	createdAt_lt?:PartialObjects["DateTime"],
	createdAt_lte?:PartialObjects["DateTime"],
	createdAt_gt?:PartialObjects["DateTime"],
	createdAt_gte?:PartialObjects["DateTime"],
	createdAt_in?:(PartialObjects["DateTime"] | undefined)[],
	createdAt_not_in?:(PartialObjects["DateTime"] | undefined)[],
	updatedBy?:PartialObjects["UserWhereInput"],
	updatedBy_is_null?:boolean,
	createdBy?:PartialObjects["UserWhereInput"],
	createdBy_is_null?:boolean
},
	["UserWhereUniqueInput"]: {
	id:string
}
  }

// A keystone list

// A keystone list

// Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).

// All options are strings as they ultimately end up in a URL.

// A keystone list

// DateTime custom scalar represents an ISO 8601 datetime string

// A keystone list

// The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).

// A keystone list

// A keystone list

// A keystone list

// A keystone list

// The `Upload` scalar type represents a file upload.

// A keystone list



export type _ListAccess = {
	__typename?: "_ListAccess",
	create?:boolean,
	read?:JSON,
	update?:JSON,
	delete?:JSON,
	auth?:JSON
}

export type _ListMeta = {
	__typename?: "_ListMeta",
	name?:string,
	access?:_ListAccess,
	schema?:_ListSchema
}

export type _ListSchema = {
	__typename?: "_ListSchema",
	type?:string,
	queries?:(string | undefined)[],
	relatedFields?:(_ListSchemaRelatedFields | undefined)[]
}

export type _ListSchemaRelatedFields = {
	__typename?: "_ListSchemaRelatedFields",
	type?:string,
	fields?:(string | undefined)[]
}

export type _QueryMeta = {
	__typename?: "_QueryMeta",
	count?:number
}

export type authenticateUserOutput = {
	__typename?: "authenticateUserOutput",
	token?:string,
	item?:User
}

export type BlockContent = {
	__typename?: "BlockContent",
	_label_?:string,
	id?:string,
	name?:string,
	title?:string,
	subtitle?:string,
	hero?:File,
	image?:CloudinaryImage_File,
	textContent?:string,
	richContent?:string,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type BlockContentCreateInput = {
		name?:string,
	title?:string,
	subtitle?:string,
	hero?:Upload,
	image?:Upload,
	textContent?:string,
	richContent?:string
}

export type BlockContentRelateToManyInput = {
		create?:(BlockContentCreateInput | undefined)[],
	connect?:(BlockContentWhereUniqueInput | undefined)[],
	disconnect?:(BlockContentWhereUniqueInput | undefined)[],
	disconnectAll?:boolean
}

export type BlockContentsCreateInput = {
		data?:BlockContentCreateInput
}

export type BlockContentsUpdateInput = {
		id:string,
	data?:BlockContentUpdateInput
}

export type BlockContentUpdateInput = {
		name?:string,
	title?:string,
	subtitle?:string,
	hero?:Upload,
	image?:Upload,
	textContent?:string,
	richContent?:string
}

export type BlockContentWhereInput = {
		AND?:(BlockContentWhereInput | undefined)[],
	OR?:(BlockContentWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	title?:string,
	title_not?:string,
	title_contains?:string,
	title_not_contains?:string,
	title_starts_with?:string,
	title_not_starts_with?:string,
	title_ends_with?:string,
	title_not_ends_with?:string,
	title_i?:string,
	title_not_i?:string,
	title_contains_i?:string,
	title_not_contains_i?:string,
	title_starts_with_i?:string,
	title_not_starts_with_i?:string,
	title_ends_with_i?:string,
	title_not_ends_with_i?:string,
	title_in?:(string | undefined)[],
	title_not_in?:(string | undefined)[],
	subtitle?:string,
	subtitle_not?:string,
	subtitle_contains?:string,
	subtitle_not_contains?:string,
	subtitle_starts_with?:string,
	subtitle_not_starts_with?:string,
	subtitle_ends_with?:string,
	subtitle_not_ends_with?:string,
	subtitle_i?:string,
	subtitle_not_i?:string,
	subtitle_contains_i?:string,
	subtitle_not_contains_i?:string,
	subtitle_starts_with_i?:string,
	subtitle_not_starts_with_i?:string,
	subtitle_ends_with_i?:string,
	subtitle_not_ends_with_i?:string,
	subtitle_in?:(string | undefined)[],
	subtitle_not_in?:(string | undefined)[],
	hero?:string,
	hero_not?:string,
	hero_contains?:string,
	hero_not_contains?:string,
	hero_starts_with?:string,
	hero_not_starts_with?:string,
	hero_ends_with?:string,
	hero_not_ends_with?:string,
	hero_in?:(string | undefined)[],
	hero_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	textContent?:string,
	textContent_not?:string,
	textContent_contains?:string,
	textContent_not_contains?:string,
	textContent_starts_with?:string,
	textContent_not_starts_with?:string,
	textContent_ends_with?:string,
	textContent_not_ends_with?:string,
	textContent_i?:string,
	textContent_not_i?:string,
	textContent_contains_i?:string,
	textContent_not_contains_i?:string,
	textContent_starts_with_i?:string,
	textContent_not_starts_with_i?:string,
	textContent_ends_with_i?:string,
	textContent_not_ends_with_i?:string,
	textContent_in?:(string | undefined)[],
	textContent_not_in?:(string | undefined)[],
	richContent?:string,
	richContent_not?:string,
	richContent_contains?:string,
	richContent_not_contains?:string,
	richContent_starts_with?:string,
	richContent_not_starts_with?:string,
	richContent_ends_with?:string,
	richContent_not_ends_with?:string,
	richContent_i?:string,
	richContent_not_i?:string,
	richContent_contains_i?:string,
	richContent_not_contains_i?:string,
	richContent_starts_with_i?:string,
	richContent_not_starts_with_i?:string,
	richContent_ends_with_i?:string,
	richContent_not_ends_with_i?:string,
	richContent_in?:(string | undefined)[],
	richContent_not_in?:(string | undefined)[],
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type BlockContentWhereUniqueInput = {
		id:string
}

export type Business = {
	__typename?: "Business",
	_label_?:string,
	id?:string,
	name?:string,
	description?:string,
	owner?:User,
	staffMembers?:(StaffName | undefined)[],
	_staffMembersMeta?:_QueryMeta,
	profileImage?:CloudinaryImage_File,
	heroImage?:CloudinaryImage_File,
	themeColor?:string,
	location?:Location,
	businessSlug?:string,
	backers?:(User | undefined)[],
	_backersMeta?:_QueryMeta,
	status?:BusinessStatusType,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type BusinessCreateInput = {
		name?:string,
	description?:string,
	owner?:UserRelateToOneInput,
	staffMembers?:StaffNameRelateToManyInput,
	profileImage?:Upload,
	heroImage?:Upload,
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:UserRelateToManyInput,
	status?:BusinessStatusType
}

export type BusinessesCreateInput = {
		data?:BusinessCreateInput
}

export type BusinessesUpdateInput = {
		id:string,
	data?:BusinessUpdateInput
}

export type BusinessRelateToManyInput = {
		create?:(BusinessCreateInput | undefined)[],
	connect?:(BusinessWhereUniqueInput | undefined)[],
	disconnect?:(BusinessWhereUniqueInput | undefined)[],
	disconnectAll?:boolean
}

export type BusinessRelateToOneInput = {
		create?:BusinessCreateInput,
	connect?:BusinessWhereUniqueInput,
	disconnect?:BusinessWhereUniqueInput,
	disconnectAll?:boolean
}

export enum BusinessStatusType {
	active = "active",
	closed = "closed",
	limited = "limited",
	takeout = "takeout"
}

export type BusinessUpdateInput = {
		name?:string,
	description?:string,
	owner?:UserRelateToOneInput,
	staffMembers?:StaffNameRelateToManyInput,
	profileImage?:Upload,
	heroImage?:Upload,
	themeColor?:string,
	location?:string,
	businessSlug?:string,
	backers?:UserRelateToManyInput,
	status?:BusinessStatusType
}

export type BusinessWhereInput = {
		AND?:(BusinessWhereInput | undefined)[],
	OR?:(BusinessWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	owner?:UserWhereInput,
	owner_is_null?:boolean,
	staffMembers_every?:StaffNameWhereInput,
	staffMembers_some?:StaffNameWhereInput,
	staffMembers_none?:StaffNameWhereInput,
	staffMembers_is_null?:boolean,
	profileImage?:string,
	profileImage_not?:string,
	profileImage_contains?:string,
	profileImage_not_contains?:string,
	profileImage_starts_with?:string,
	profileImage_not_starts_with?:string,
	profileImage_ends_with?:string,
	profileImage_not_ends_with?:string,
	profileImage_in?:(string | undefined)[],
	profileImage_not_in?:(string | undefined)[],
	heroImage?:string,
	heroImage_not?:string,
	heroImage_contains?:string,
	heroImage_not_contains?:string,
	heroImage_starts_with?:string,
	heroImage_not_starts_with?:string,
	heroImage_ends_with?:string,
	heroImage_not_ends_with?:string,
	heroImage_in?:(string | undefined)[],
	heroImage_not_in?:(string | undefined)[],
	themeColor?:string,
	themeColor_not?:string,
	themeColor_contains?:string,
	themeColor_not_contains?:string,
	themeColor_starts_with?:string,
	themeColor_not_starts_with?:string,
	themeColor_ends_with?:string,
	themeColor_not_ends_with?:string,
	themeColor_i?:string,
	themeColor_not_i?:string,
	themeColor_contains_i?:string,
	themeColor_not_contains_i?:string,
	themeColor_starts_with_i?:string,
	themeColor_not_starts_with_i?:string,
	themeColor_ends_with_i?:string,
	themeColor_not_ends_with_i?:string,
	themeColor_in?:(string | undefined)[],
	themeColor_not_in?:(string | undefined)[],
	location?:string,
	location_not?:string,
	location_contains?:string,
	location_not_contains?:string,
	location_starts_with?:string,
	location_not_starts_with?:string,
	location_ends_with?:string,
	location_not_ends_with?:string,
	location_in?:(string | undefined)[],
	location_not_in?:(string | undefined)[],
	businessSlug?:string,
	businessSlug_not?:string,
	businessSlug_contains?:string,
	businessSlug_not_contains?:string,
	businessSlug_starts_with?:string,
	businessSlug_not_starts_with?:string,
	businessSlug_ends_with?:string,
	businessSlug_not_ends_with?:string,
	businessSlug_i?:string,
	businessSlug_not_i?:string,
	businessSlug_contains_i?:string,
	businessSlug_not_contains_i?:string,
	businessSlug_starts_with_i?:string,
	businessSlug_not_starts_with_i?:string,
	businessSlug_ends_with_i?:string,
	businessSlug_not_ends_with_i?:string,
	businessSlug_in?:(string | undefined)[],
	businessSlug_not_in?:(string | undefined)[],
	backers_every?:UserWhereInput,
	backers_some?:UserWhereInput,
	backers_none?:UserWhereInput,
	backers_is_null?:boolean,
	status?:BusinessStatusType,
	status_not?:BusinessStatusType,
	status_in?:(BusinessStatusType | undefined)[],
	status_not_in?:(BusinessStatusType | undefined)[],
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type BusinessWhereUniqueInput = {
		id:string
}

export enum CacheControlScope {
	PUBLIC = "PUBLIC",
	PRIVATE = "PRIVATE"
}

export type CloudinaryImage_File = {
	__typename?: "CloudinaryImage_File",
	id?:string,
	path?:string,
	filename?:string,
	originalFilename?:string,
	mimetype?:string,
	encoding?:string,
	publicUrl?:string,
	publicUrlTransformed?:string
}

export type CloudinaryImageFormat = {
		prettyName?:string,
	width?:string,
	height?:string,
	crop?:string,
	aspect_ratio?:string,
	gravity?:string,
	zoom?:string,
	x?:string,
	y?:string,
	format?:string,
	fetch_format?:string,
	quality?:string,
	radius?:string,
	angle?:string,
	effect?:string,
	opacity?:string,
	border?:string,
	background?:string,
	overlay?:string,
	underlay?:string,
	default_image?:string,
	delay?:string,
	color?:string,
	color_space?:string,
	dpr?:string,
	page?:string,
	density?:string,
	flags?:string,
	transformation?:string
}

export type ContentPage = {
	__typename?: "ContentPage",
	_label_?:string,
	id?:string,
	name?:string,
	slug?:string,
	status?:ContentPageStatusType,
	blocks?:(BlockContent | undefined)[],
	_blocksMeta?:_QueryMeta,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type ContentPageCreateInput = {
		name?:string,
	slug?:string,
	status?:ContentPageStatusType,
	blocks?:BlockContentRelateToManyInput
}

export type ContentPagesCreateInput = {
		data?:ContentPageCreateInput
}

export enum ContentPageStatusType {
	draft = "draft",
	published = "published"
}

export type ContentPagesUpdateInput = {
		id:string,
	data?:ContentPageUpdateInput
}

export type ContentPageUpdateInput = {
		name?:string,
	slug?:string,
	status?:ContentPageStatusType,
	blocks?:BlockContentRelateToManyInput
}

export type ContentPageWhereInput = {
		AND?:(ContentPageWhereInput | undefined)[],
	OR?:(ContentPageWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	slug?:string,
	slug_not?:string,
	slug_contains?:string,
	slug_not_contains?:string,
	slug_starts_with?:string,
	slug_not_starts_with?:string,
	slug_ends_with?:string,
	slug_not_ends_with?:string,
	slug_i?:string,
	slug_not_i?:string,
	slug_contains_i?:string,
	slug_not_contains_i?:string,
	slug_starts_with_i?:string,
	slug_not_starts_with_i?:string,
	slug_ends_with_i?:string,
	slug_not_ends_with_i?:string,
	slug_in?:(string | undefined)[],
	slug_not_in?:(string | undefined)[],
	status?:ContentPageStatusType,
	status_not?:ContentPageStatusType,
	status_in?:(ContentPageStatusType | undefined)[],
	status_not_in?:(ContentPageStatusType | undefined)[],
	blocks_every?:BlockContentWhereInput,
	blocks_some?:BlockContentWhereInput,
	blocks_none?:BlockContentWhereInput,
	blocks_is_null?:boolean,
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type ContentPageWhereUniqueInput = {
		id:string
}

export type DateTime = any

export type File = {
	__typename?: "File",
	id?:string,
	path?:string,
	filename?:string,
	originalFilename?:string,
	mimetype?:string,
	encoding?:string,
	publicUrl?:string
}

export type ForgottenPasswordToken = {
	__typename?: "ForgottenPasswordToken",
	_label_?:string,
	id?:string,
	user?:User,
	token?:string,
	requestedAt?:DateTime,
	accessedAt?:DateTime,
	expiresAt?:DateTime,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type ForgottenPasswordTokenCreateInput = {
		user?:UserRelateToOneInput,
	token?:string,
	requestedAt?:DateTime,
	accessedAt?:DateTime,
	expiresAt?:DateTime
}

export type ForgottenPasswordTokensCreateInput = {
		data?:ForgottenPasswordTokenCreateInput
}

export type ForgottenPasswordTokensUpdateInput = {
		id:string,
	data?:ForgottenPasswordTokenUpdateInput
}

export type ForgottenPasswordTokenUpdateInput = {
		user?:UserRelateToOneInput,
	token?:string,
	requestedAt?:DateTime,
	accessedAt?:DateTime,
	expiresAt?:DateTime
}

export type ForgottenPasswordTokenWhereInput = {
		AND?:(ForgottenPasswordTokenWhereInput | undefined)[],
	OR?:(ForgottenPasswordTokenWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	user?:UserWhereInput,
	user_is_null?:boolean,
	token?:string,
	token_not?:string,
	token_contains?:string,
	token_not_contains?:string,
	token_starts_with?:string,
	token_not_starts_with?:string,
	token_ends_with?:string,
	token_not_ends_with?:string,
	token_i?:string,
	token_not_i?:string,
	token_contains_i?:string,
	token_not_contains_i?:string,
	token_starts_with_i?:string,
	token_not_starts_with_i?:string,
	token_ends_with_i?:string,
	token_not_ends_with_i?:string,
	token_in?:(string | undefined)[],
	token_not_in?:(string | undefined)[],
	requestedAt?:DateTime,
	requestedAt_not?:DateTime,
	requestedAt_lt?:DateTime,
	requestedAt_lte?:DateTime,
	requestedAt_gt?:DateTime,
	requestedAt_gte?:DateTime,
	requestedAt_in?:(DateTime | undefined)[],
	requestedAt_not_in?:(DateTime | undefined)[],
	accessedAt?:DateTime,
	accessedAt_not?:DateTime,
	accessedAt_lt?:DateTime,
	accessedAt_lte?:DateTime,
	accessedAt_gt?:DateTime,
	accessedAt_gte?:DateTime,
	accessedAt_in?:(DateTime | undefined)[],
	accessedAt_not_in?:(DateTime | undefined)[],
	expiresAt?:DateTime,
	expiresAt_not?:DateTime,
	expiresAt_lt?:DateTime,
	expiresAt_lte?:DateTime,
	expiresAt_gt?:DateTime,
	expiresAt_gte?:DateTime,
	expiresAt_in?:(DateTime | undefined)[],
	expiresAt_not_in?:(DateTime | undefined)[],
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type ForgottenPasswordTokenWhereUniqueInput = {
		id:string
}

export type JSON = any

export type Location = {
	__typename?: "Location",
	id?:string,
	googlePlaceID?:string,
	formattedAddress?:string,
	lat?:number,
	lng?:number
}

export type Mutation = {
	__typename?: "Mutation",
	createUser?:User,
	createUsers?:(User | undefined)[],
	updateUser?:User,
	updateUsers?:(User | undefined)[],
	deleteUser?:User,
	deleteUsers?:(User | undefined)[],
	createBusiness?:Business,
	createBusinesses?:(Business | undefined)[],
	updateBusiness?:Business,
	updateBusinesses?:(Business | undefined)[],
	deleteBusiness?:Business,
	deleteBusinesses?:(Business | undefined)[],
	createOffering?:Offering,
	createOfferings?:(Offering | undefined)[],
	updateOffering?:Offering,
	updateOfferings?:(Offering | undefined)[],
	deleteOffering?:Offering,
	deleteOfferings?:(Offering | undefined)[],
	createPurchase?:Purchase,
	createPurchases?:(Purchase | undefined)[],
	updatePurchase?:Purchase,
	updatePurchases?:(Purchase | undefined)[],
	deletePurchase?:Purchase,
	deletePurchases?:(Purchase | undefined)[],
	createStaffName?:StaffName,
	createStaffNames?:(StaffName | undefined)[],
	updateStaffName?:StaffName,
	updateStaffNames?:(StaffName | undefined)[],
	deleteStaffName?:StaffName,
	deleteStaffNames?:(StaffName | undefined)[],
	createForgottenPasswordToken?:ForgottenPasswordToken,
	createForgottenPasswordTokens?:(ForgottenPasswordToken | undefined)[],
	updateForgottenPasswordToken?:ForgottenPasswordToken,
	updateForgottenPasswordTokens?:(ForgottenPasswordToken | undefined)[],
	deleteForgottenPasswordToken?:ForgottenPasswordToken,
	deleteForgottenPasswordTokens?:(ForgottenPasswordToken | undefined)[],
	createBlockContent?:BlockContent,
	createBlockContents?:(BlockContent | undefined)[],
	updateBlockContent?:BlockContent,
	updateBlockContents?:(BlockContent | undefined)[],
	deleteBlockContent?:BlockContent,
	deleteBlockContents?:(BlockContent | undefined)[],
	createContentPage?:ContentPage,
	createContentPages?:(ContentPage | undefined)[],
	updateContentPage?:ContentPage,
	updateContentPages?:(ContentPage | undefined)[],
	deleteContentPage?:ContentPage,
	deleteContentPages?:(ContentPage | undefined)[],
	createPassportSession?:passportSession,
	createPassportSessions?:(passportSession | undefined)[],
	updatePassportSession?:passportSession,
	updatePassportSessions?:(passportSession | undefined)[],
	deletePassportSession?:passportSession,
	deletePassportSessions?:(passportSession | undefined)[],
	authenticateUserWithFacebook?:authenticateUserOutput,
	unauthenticateUser?:unauthenticateUserOutput,
	authenticateUserWithGoogle?:authenticateUserOutput,
	authenticateUserWithPassword?:authenticateUserOutput
}

export type Offering = {
	__typename?: "Offering",
	_label_?:string,
	id?:string,
	name?:string,
	details?:string,
	status?:OfferingStatusType,
	business?:Business,
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type OfferingCreateInput = {
		name?:string,
	details?:string,
	status?:OfferingStatusType,
	business?:BusinessRelateToOneInput,
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
}

export type OfferingRelateToOneInput = {
		create?:OfferingCreateInput,
	connect?:OfferingWhereUniqueInput,
	disconnect?:OfferingWhereUniqueInput,
	disconnectAll?:boolean
}

export type OfferingsCreateInput = {
		data?:OfferingCreateInput
}

export enum OfferingStatusType {
	draft = "draft",
	active = "active"
}

export type OfferingsUpdateInput = {
		id:string,
	data?:OfferingUpdateInput
}

export type OfferingUpdateInput = {
		name?:string,
	details?:string,
	status?:OfferingStatusType,
	business?:BusinessRelateToOneInput,
	price?:string,
	currency?:string,
	description?:string,
	maxSlots?:number,
	iAvailable?:boolean
}

export type OfferingWhereInput = {
		AND?:(OfferingWhereInput | undefined)[],
	OR?:(OfferingWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	details?:string,
	details_not?:string,
	details_contains?:string,
	details_not_contains?:string,
	details_starts_with?:string,
	details_not_starts_with?:string,
	details_ends_with?:string,
	details_not_ends_with?:string,
	details_i?:string,
	details_not_i?:string,
	details_contains_i?:string,
	details_not_contains_i?:string,
	details_starts_with_i?:string,
	details_not_starts_with_i?:string,
	details_ends_with_i?:string,
	details_not_ends_with_i?:string,
	details_in?:(string | undefined)[],
	details_not_in?:(string | undefined)[],
	status?:OfferingStatusType,
	status_not?:OfferingStatusType,
	status_in?:(OfferingStatusType | undefined)[],
	status_not_in?:(OfferingStatusType | undefined)[],
	business?:BusinessWhereInput,
	business_is_null?:boolean,
	price?:string,
	price_not?:string,
	price_lt?:string,
	price_lte?:string,
	price_gt?:string,
	price_gte?:string,
	price_in?:(string | undefined)[],
	price_not_in?:(string | undefined)[],
	currency?:string,
	currency_not?:string,
	currency_contains?:string,
	currency_not_contains?:string,
	currency_starts_with?:string,
	currency_not_starts_with?:string,
	currency_ends_with?:string,
	currency_not_ends_with?:string,
	currency_i?:string,
	currency_not_i?:string,
	currency_contains_i?:string,
	currency_not_contains_i?:string,
	currency_starts_with_i?:string,
	currency_not_starts_with_i?:string,
	currency_ends_with_i?:string,
	currency_not_ends_with_i?:string,
	currency_in?:(string | undefined)[],
	currency_not_in?:(string | undefined)[],
	description?:string,
	description_not?:string,
	description_contains?:string,
	description_not_contains?:string,
	description_starts_with?:string,
	description_not_starts_with?:string,
	description_ends_with?:string,
	description_not_ends_with?:string,
	description_i?:string,
	description_not_i?:string,
	description_contains_i?:string,
	description_not_contains_i?:string,
	description_starts_with_i?:string,
	description_not_starts_with_i?:string,
	description_ends_with_i?:string,
	description_not_ends_with_i?:string,
	description_in?:(string | undefined)[],
	description_not_in?:(string | undefined)[],
	maxSlots?:number,
	maxSlots_not?:number,
	maxSlots_lt?:number,
	maxSlots_lte?:number,
	maxSlots_gt?:number,
	maxSlots_gte?:number,
	maxSlots_in?:(number | undefined)[],
	maxSlots_not_in?:(number | undefined)[],
	iAvailable?:boolean,
	iAvailable_not?:boolean,
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type OfferingWhereUniqueInput = {
		id:string
}

export type passportSession = {
	__typename?: "passportSession",
	_label_?:string,
	id?:string,
	service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:User
}

export type PassportSessionCreateInput = {
		service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:UserRelateToOneInput
}

export type PassportSessionsCreateInput = {
		data?:PassportSessionCreateInput
}

export type PassportSessionsUpdateInput = {
		id:string,
	data?:PassportSessionUpdateInput
}

export type PassportSessionUpdateInput = {
		service?:string,
	serviceUserId?:string,
	tokenSecret?:string,
	refreshToken?:string,
	item?:UserRelateToOneInput
}

export type PassportSessionWhereInput = {
		AND?:(PassportSessionWhereInput | undefined)[],
	OR?:(PassportSessionWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	service?:string,
	service_not?:string,
	service_contains?:string,
	service_not_contains?:string,
	service_starts_with?:string,
	service_not_starts_with?:string,
	service_ends_with?:string,
	service_not_ends_with?:string,
	service_i?:string,
	service_not_i?:string,
	service_contains_i?:string,
	service_not_contains_i?:string,
	service_starts_with_i?:string,
	service_not_starts_with_i?:string,
	service_ends_with_i?:string,
	service_not_ends_with_i?:string,
	service_in?:(string | undefined)[],
	service_not_in?:(string | undefined)[],
	serviceUserId?:string,
	serviceUserId_not?:string,
	serviceUserId_contains?:string,
	serviceUserId_not_contains?:string,
	serviceUserId_starts_with?:string,
	serviceUserId_not_starts_with?:string,
	serviceUserId_ends_with?:string,
	serviceUserId_not_ends_with?:string,
	serviceUserId_i?:string,
	serviceUserId_not_i?:string,
	serviceUserId_contains_i?:string,
	serviceUserId_not_contains_i?:string,
	serviceUserId_starts_with_i?:string,
	serviceUserId_not_starts_with_i?:string,
	serviceUserId_ends_with_i?:string,
	serviceUserId_not_ends_with_i?:string,
	serviceUserId_in?:(string | undefined)[],
	serviceUserId_not_in?:(string | undefined)[],
	tokenSecret?:string,
	tokenSecret_not?:string,
	tokenSecret_contains?:string,
	tokenSecret_not_contains?:string,
	tokenSecret_starts_with?:string,
	tokenSecret_not_starts_with?:string,
	tokenSecret_ends_with?:string,
	tokenSecret_not_ends_with?:string,
	tokenSecret_i?:string,
	tokenSecret_not_i?:string,
	tokenSecret_contains_i?:string,
	tokenSecret_not_contains_i?:string,
	tokenSecret_starts_with_i?:string,
	tokenSecret_not_starts_with_i?:string,
	tokenSecret_ends_with_i?:string,
	tokenSecret_not_ends_with_i?:string,
	tokenSecret_in?:(string | undefined)[],
	tokenSecret_not_in?:(string | undefined)[],
	refreshToken?:string,
	refreshToken_not?:string,
	refreshToken_contains?:string,
	refreshToken_not_contains?:string,
	refreshToken_starts_with?:string,
	refreshToken_not_starts_with?:string,
	refreshToken_ends_with?:string,
	refreshToken_not_ends_with?:string,
	refreshToken_i?:string,
	refreshToken_not_i?:string,
	refreshToken_contains_i?:string,
	refreshToken_not_contains_i?:string,
	refreshToken_starts_with_i?:string,
	refreshToken_not_starts_with_i?:string,
	refreshToken_ends_with_i?:string,
	refreshToken_not_ends_with_i?:string,
	refreshToken_in?:(string | undefined)[],
	refreshToken_not_in?:(string | undefined)[],
	item?:UserWhereInput,
	item_is_null?:boolean
}

export type PassportSessionWhereUniqueInput = {
		id:string
}

export type Purchase = {
	__typename?: "Purchase",
	_label_?:string,
	id?:string,
	item?:Offering,
	business?:Business,
	user?:User
}

export type PurchaseCreateInput = {
		item?:OfferingRelateToOneInput,
	business?:BusinessRelateToOneInput,
	user?:UserRelateToOneInput
}

export type PurchasesCreateInput = {
		data?:PurchaseCreateInput
}

export type PurchasesUpdateInput = {
		id:string,
	data?:PurchaseUpdateInput
}

export type PurchaseUpdateInput = {
		item?:OfferingRelateToOneInput,
	business?:BusinessRelateToOneInput,
	user?:UserRelateToOneInput
}

export type PurchaseWhereInput = {
		AND?:(PurchaseWhereInput | undefined)[],
	OR?:(PurchaseWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	item?:OfferingWhereInput,
	item_is_null?:boolean,
	business?:BusinessWhereInput,
	business_is_null?:boolean,
	user?:UserWhereInput,
	user_is_null?:boolean
}

export type PurchaseWhereUniqueInput = {
		id:string
}

export type Query = {
	__typename?: "Query",
	allUsers?:(User | undefined)[],
	User?:User,
	_allUsersMeta?:_QueryMeta,
	_UsersMeta?:_ListMeta,
	allBusinesses?:(Business | undefined)[],
	Business?:Business,
	_allBusinessesMeta?:_QueryMeta,
	_BusinessesMeta?:_ListMeta,
	allOfferings?:(Offering | undefined)[],
	Offering?:Offering,
	_allOfferingsMeta?:_QueryMeta,
	_OfferingsMeta?:_ListMeta,
	allPurchases?:(Purchase | undefined)[],
	Purchase?:Purchase,
	_allPurchasesMeta?:_QueryMeta,
	_PurchasesMeta?:_ListMeta,
	allStaffNames?:(StaffName | undefined)[],
	StaffName?:StaffName,
	_allStaffNamesMeta?:_QueryMeta,
	_StaffNamesMeta?:_ListMeta,
	allForgottenPasswordTokens?:(ForgottenPasswordToken | undefined)[],
	ForgottenPasswordToken?:ForgottenPasswordToken,
	_allForgottenPasswordTokensMeta?:_QueryMeta,
	_ForgottenPasswordTokensMeta?:_ListMeta,
	allBlockContents?:(BlockContent | undefined)[],
	BlockContent?:BlockContent,
	_allBlockContentsMeta?:_QueryMeta,
	_BlockContentsMeta?:_ListMeta,
	allContentPages?:(ContentPage | undefined)[],
	ContentPage?:ContentPage,
	_allContentPagesMeta?:_QueryMeta,
	_ContentPagesMeta?:_ListMeta,
	allPassportSessions?:(passportSession | undefined)[],
	PassportSession?:passportSession,
	_allPassportSessionsMeta?:_QueryMeta,
	_PassportSessionsMeta?:_ListMeta,
	_ksListsMeta?:(_ListMeta | undefined)[],
	appVersion?:string,
	authenticatedUser?:User
}

export type StaffName = {
	__typename?: "StaffName",
	_label_?:string,
	id?:string,
	name?:string,
	position?:string,
	useraccount?:User,
	photo?:CloudinaryImage_File,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type StaffNameCreateInput = {
		name?:string,
	position?:string,
	useraccount?:UserRelateToOneInput,
	photo?:Upload
}

export type StaffNameRelateToManyInput = {
		create?:(StaffNameCreateInput | undefined)[],
	connect?:(StaffNameWhereUniqueInput | undefined)[],
	disconnect?:(StaffNameWhereUniqueInput | undefined)[],
	disconnectAll?:boolean
}

export type StaffNamesCreateInput = {
		data?:StaffNameCreateInput
}

export type StaffNamesUpdateInput = {
		id:string,
	data?:StaffNameUpdateInput
}

export type StaffNameUpdateInput = {
		name?:string,
	position?:string,
	useraccount?:UserRelateToOneInput,
	photo?:Upload
}

export type StaffNameWhereInput = {
		AND?:(StaffNameWhereInput | undefined)[],
	OR?:(StaffNameWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	position?:string,
	position_not?:string,
	position_contains?:string,
	position_not_contains?:string,
	position_starts_with?:string,
	position_not_starts_with?:string,
	position_ends_with?:string,
	position_not_ends_with?:string,
	position_i?:string,
	position_not_i?:string,
	position_contains_i?:string,
	position_not_contains_i?:string,
	position_starts_with_i?:string,
	position_not_starts_with_i?:string,
	position_ends_with_i?:string,
	position_not_ends_with_i?:string,
	position_in?:(string | undefined)[],
	position_not_in?:(string | undefined)[],
	useraccount?:UserWhereInput,
	useraccount_is_null?:boolean,
	photo?:string,
	photo_not?:string,
	photo_contains?:string,
	photo_not_contains?:string,
	photo_starts_with?:string,
	photo_not_starts_with?:string,
	photo_ends_with?:string,
	photo_not_ends_with?:string,
	photo_in?:(string | undefined)[],
	photo_not_in?:(string | undefined)[],
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type StaffNameWhereUniqueInput = {
		id:string
}

export type unauthenticateUserOutput = {
	__typename?: "unauthenticateUserOutput",
	success?:boolean
}

export type Upload = any

export type User = {
	__typename?: "User",
	_label_?:string,
	id?:string,
	name?:string,
	email?:string,
	password_is_set?:boolean,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:CloudinaryImage_File,
	lastLogin?:string,
	managingBusinesses?:(Business | undefined)[],
	_managingBusinessesMeta?:_QueryMeta,
	backing?:(Business | undefined)[],
	_backingMeta?:_QueryMeta,
	updatedAt?:DateTime,
	createdAt?:DateTime,
	updatedBy?:User,
	createdBy?:User
}

export type UserCreateInput = {
		name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:Upload,
	lastLogin?:string,
	managingBusinesses?:BusinessRelateToManyInput,
	backing?:BusinessRelateToManyInput
}

export type UserRelateToManyInput = {
		create?:(UserCreateInput | undefined)[],
	connect?:(UserWhereUniqueInput | undefined)[],
	disconnect?:(UserWhereUniqueInput | undefined)[],
	disconnectAll?:boolean
}

export type UserRelateToOneInput = {
		create?:UserCreateInput,
	connect?:UserWhereUniqueInput,
	disconnect?:UserWhereUniqueInput,
	disconnectAll?:boolean
}

export type UsersCreateInput = {
		data?:UserCreateInput
}

export type UsersUpdateInput = {
		id:string,
	data?:UserUpdateInput
}

export type UserUpdateInput = {
		name?:string,
	email?:string,
	password?:string,
	isAdmin?:boolean,
	isBusiness?:boolean,
	favoriteFood?:string,
	twitterHandle?:string,
	yelpUrl?:string,
	username?:string,
	googleId?:string,
	facebookId?:string,
	userSlug?:string,
	image?:Upload,
	lastLogin?:string,
	managingBusinesses?:BusinessRelateToManyInput,
	backing?:BusinessRelateToManyInput
}

export type UserWhereInput = {
		AND?:(UserWhereInput | undefined)[],
	OR?:(UserWhereInput | undefined)[],
	id?:string,
	id_not?:string,
	id_in?:(string | undefined)[],
	id_not_in?:(string | undefined)[],
	name?:string,
	name_not?:string,
	name_contains?:string,
	name_not_contains?:string,
	name_starts_with?:string,
	name_not_starts_with?:string,
	name_ends_with?:string,
	name_not_ends_with?:string,
	name_i?:string,
	name_not_i?:string,
	name_contains_i?:string,
	name_not_contains_i?:string,
	name_starts_with_i?:string,
	name_not_starts_with_i?:string,
	name_ends_with_i?:string,
	name_not_ends_with_i?:string,
	name_in?:(string | undefined)[],
	name_not_in?:(string | undefined)[],
	email?:string,
	email_not?:string,
	email_contains?:string,
	email_not_contains?:string,
	email_starts_with?:string,
	email_not_starts_with?:string,
	email_ends_with?:string,
	email_not_ends_with?:string,
	email_i?:string,
	email_not_i?:string,
	email_contains_i?:string,
	email_not_contains_i?:string,
	email_starts_with_i?:string,
	email_not_starts_with_i?:string,
	email_ends_with_i?:string,
	email_not_ends_with_i?:string,
	email_in?:(string | undefined)[],
	email_not_in?:(string | undefined)[],
	password_is_set?:boolean,
	isAdmin?:boolean,
	isAdmin_not?:boolean,
	isBusiness?:boolean,
	isBusiness_not?:boolean,
	favoriteFood?:string,
	favoriteFood_not?:string,
	favoriteFood_contains?:string,
	favoriteFood_not_contains?:string,
	favoriteFood_starts_with?:string,
	favoriteFood_not_starts_with?:string,
	favoriteFood_ends_with?:string,
	favoriteFood_not_ends_with?:string,
	favoriteFood_i?:string,
	favoriteFood_not_i?:string,
	favoriteFood_contains_i?:string,
	favoriteFood_not_contains_i?:string,
	favoriteFood_starts_with_i?:string,
	favoriteFood_not_starts_with_i?:string,
	favoriteFood_ends_with_i?:string,
	favoriteFood_not_ends_with_i?:string,
	favoriteFood_in?:(string | undefined)[],
	favoriteFood_not_in?:(string | undefined)[],
	twitterHandle?:string,
	twitterHandle_not?:string,
	twitterHandle_contains?:string,
	twitterHandle_not_contains?:string,
	twitterHandle_starts_with?:string,
	twitterHandle_not_starts_with?:string,
	twitterHandle_ends_with?:string,
	twitterHandle_not_ends_with?:string,
	twitterHandle_i?:string,
	twitterHandle_not_i?:string,
	twitterHandle_contains_i?:string,
	twitterHandle_not_contains_i?:string,
	twitterHandle_starts_with_i?:string,
	twitterHandle_not_starts_with_i?:string,
	twitterHandle_ends_with_i?:string,
	twitterHandle_not_ends_with_i?:string,
	twitterHandle_in?:(string | undefined)[],
	twitterHandle_not_in?:(string | undefined)[],
	yelpUrl?:string,
	yelpUrl_not?:string,
	yelpUrl_contains?:string,
	yelpUrl_not_contains?:string,
	yelpUrl_starts_with?:string,
	yelpUrl_not_starts_with?:string,
	yelpUrl_ends_with?:string,
	yelpUrl_not_ends_with?:string,
	yelpUrl_i?:string,
	yelpUrl_not_i?:string,
	yelpUrl_contains_i?:string,
	yelpUrl_not_contains_i?:string,
	yelpUrl_starts_with_i?:string,
	yelpUrl_not_starts_with_i?:string,
	yelpUrl_ends_with_i?:string,
	yelpUrl_not_ends_with_i?:string,
	yelpUrl_in?:(string | undefined)[],
	yelpUrl_not_in?:(string | undefined)[],
	username?:string,
	username_not?:string,
	username_contains?:string,
	username_not_contains?:string,
	username_starts_with?:string,
	username_not_starts_with?:string,
	username_ends_with?:string,
	username_not_ends_with?:string,
	username_i?:string,
	username_not_i?:string,
	username_contains_i?:string,
	username_not_contains_i?:string,
	username_starts_with_i?:string,
	username_not_starts_with_i?:string,
	username_ends_with_i?:string,
	username_not_ends_with_i?:string,
	username_in?:(string | undefined)[],
	username_not_in?:(string | undefined)[],
	googleId?:string,
	googleId_not?:string,
	googleId_contains?:string,
	googleId_not_contains?:string,
	googleId_starts_with?:string,
	googleId_not_starts_with?:string,
	googleId_ends_with?:string,
	googleId_not_ends_with?:string,
	googleId_i?:string,
	googleId_not_i?:string,
	googleId_contains_i?:string,
	googleId_not_contains_i?:string,
	googleId_starts_with_i?:string,
	googleId_not_starts_with_i?:string,
	googleId_ends_with_i?:string,
	googleId_not_ends_with_i?:string,
	googleId_in?:(string | undefined)[],
	googleId_not_in?:(string | undefined)[],
	facebookId?:string,
	facebookId_not?:string,
	facebookId_contains?:string,
	facebookId_not_contains?:string,
	facebookId_starts_with?:string,
	facebookId_not_starts_with?:string,
	facebookId_ends_with?:string,
	facebookId_not_ends_with?:string,
	facebookId_i?:string,
	facebookId_not_i?:string,
	facebookId_contains_i?:string,
	facebookId_not_contains_i?:string,
	facebookId_starts_with_i?:string,
	facebookId_not_starts_with_i?:string,
	facebookId_ends_with_i?:string,
	facebookId_not_ends_with_i?:string,
	facebookId_in?:(string | undefined)[],
	facebookId_not_in?:(string | undefined)[],
	userSlug?:string,
	userSlug_not?:string,
	userSlug_contains?:string,
	userSlug_not_contains?:string,
	userSlug_starts_with?:string,
	userSlug_not_starts_with?:string,
	userSlug_ends_with?:string,
	userSlug_not_ends_with?:string,
	userSlug_i?:string,
	userSlug_not_i?:string,
	userSlug_contains_i?:string,
	userSlug_not_contains_i?:string,
	userSlug_starts_with_i?:string,
	userSlug_not_starts_with_i?:string,
	userSlug_ends_with_i?:string,
	userSlug_not_ends_with_i?:string,
	userSlug_in?:(string | undefined)[],
	userSlug_not_in?:(string | undefined)[],
	image?:string,
	image_not?:string,
	image_contains?:string,
	image_not_contains?:string,
	image_starts_with?:string,
	image_not_starts_with?:string,
	image_ends_with?:string,
	image_not_ends_with?:string,
	image_in?:(string | undefined)[],
	image_not_in?:(string | undefined)[],
	lastLogin?:string,
	lastLogin_not?:string,
	lastLogin_lt?:string,
	lastLogin_lte?:string,
	lastLogin_gt?:string,
	lastLogin_gte?:string,
	lastLogin_in?:(string | undefined)[],
	lastLogin_not_in?:(string | undefined)[],
	managingBusinesses_every?:BusinessWhereInput,
	managingBusinesses_some?:BusinessWhereInput,
	managingBusinesses_none?:BusinessWhereInput,
	managingBusinesses_is_null?:boolean,
	backing_every?:BusinessWhereInput,
	backing_some?:BusinessWhereInput,
	backing_none?:BusinessWhereInput,
	backing_is_null?:boolean,
	updatedAt?:DateTime,
	updatedAt_not?:DateTime,
	updatedAt_lt?:DateTime,
	updatedAt_lte?:DateTime,
	updatedAt_gt?:DateTime,
	updatedAt_gte?:DateTime,
	updatedAt_in?:(DateTime | undefined)[],
	updatedAt_not_in?:(DateTime | undefined)[],
	createdAt?:DateTime,
	createdAt_not?:DateTime,
	createdAt_lt?:DateTime,
	createdAt_lte?:DateTime,
	createdAt_gt?:DateTime,
	createdAt_gte?:DateTime,
	createdAt_in?:(DateTime | undefined)[],
	createdAt_not_in?:(DateTime | undefined)[],
	updatedBy?:UserWhereInput,
	updatedBy_is_null?:boolean,
	createdBy?:UserWhereInput,
	createdBy_is_null?:boolean
}

export type UserWhereUniqueInput = {
		id:string
}

export const AllTypesProps: Record<string,any> = {
	BlockContentCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentRelateToManyInput:{
		create:{
			type:"BlockContentCreateInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"BlockContentWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"BlockContentWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentsCreateInput:{
		data:{
			type:"BlockContentCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentsUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"BlockContentUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentWhereInput:{
		AND:{
			type:"BlockContentWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"BlockContentWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		title_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		subtitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subtitle_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		subtitle_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		hero_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		image_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		textContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textContent_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		textContent_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		richContent:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		richContent_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		richContent_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BlockContentWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Business:{
		staffMembers:{
			where:{
				type:"StaffNameWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		_staffMembersMeta:{
			where:{
				type:"StaffNameWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		backers:{
			where:{
				type:"UserWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		_backersMeta:{
			where:{
				type:"UserWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	BusinessCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers:{
			type:"StaffNameRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		backers:{
			type:"UserRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"BusinessStatusType",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessesCreateInput:{
		data:{
			type:"BusinessCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessesUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"BusinessUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessRelateToManyInput:{
		create:{
			type:"BusinessCreateInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"BusinessWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"BusinessWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessRelateToOneInput:{
		create:{
			type:"BusinessCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"BusinessWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"BusinessWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessStatusType: "enum",
	BusinessUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers:{
			type:"StaffNameRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		backers:{
			type:"UserRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"BusinessStatusType",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessWhereInput:{
		AND:{
			type:"BusinessWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"BusinessWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		description_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		owner:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		owner_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers_every:{
			type:"StaffNameWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers_some:{
			type:"StaffNameWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers_none:{
			type:"StaffNameWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		staffMembers_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		profileImage_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		profileImage_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		heroImage:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		heroImage_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		heroImage_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		themeColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		themeColor_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		themeColor_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		location_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		location_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		businessSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		businessSlug_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		businessSlug_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		backers_every:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backers_some:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backers_none:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backers_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"BusinessStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_not:{
			type:"BusinessStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_in:{
			type:"BusinessStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		status_not_in:{
			type:"BusinessStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	BusinessWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	CacheControlScope: "enum",
	CloudinaryImage_File:{
		publicUrlTransformed:{
			transformation:{
				type:"CloudinaryImageFormat",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	CloudinaryImageFormat:{
		prettyName:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		width:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		height:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		crop:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		aspect_ratio:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		gravity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		zoom:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		x:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		y:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		format:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		fetch_format:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		quality:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		radius:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		angle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		effect:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		opacity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		border:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		background:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlay:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		underlay:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		default_image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		delay:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		color:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		color_space:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		dpr:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		page:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		density:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		flags:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		transformation:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPage:{
		blocks:{
			where:{
				type:"BlockContentWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		_blocksMeta:{
			where:{
				type:"BlockContentWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	ContentPageCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"ContentPageStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks:{
			type:"BlockContentRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPagesCreateInput:{
		data:{
			type:"ContentPageCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPageStatusType: "enum",
	ContentPagesUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"ContentPageUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPageUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"ContentPageStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks:{
			type:"BlockContentRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPageWhereInput:{
		AND:{
			type:"ContentPageWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"ContentPageWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		slug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		slug_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		slug_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"ContentPageStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_not:{
			type:"ContentPageStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_in:{
			type:"ContentPageStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		status_not_in:{
			type:"ContentPageStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		blocks_every:{
			type:"BlockContentWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks_some:{
			type:"BlockContentWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks_none:{
			type:"BlockContentWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ContentPageWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	DateTime: "String",
	ForgottenPasswordTokenCreateInput:{
		user:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ForgottenPasswordTokensCreateInput:{
		data:{
			type:"ForgottenPasswordTokenCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ForgottenPasswordTokensUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"ForgottenPasswordTokenUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ForgottenPasswordTokenUpdateInput:{
		user:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ForgottenPasswordTokenWhereInput:{
		AND:{
			type:"ForgottenPasswordTokenWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"ForgottenPasswordTokenWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		token:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		token_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		token_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		requestedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		requestedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		requestedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		accessedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		accessedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		accessedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		expiresAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		expiresAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		expiresAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	ForgottenPasswordTokenWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	JSON: "String",
	Mutation:{
		createUser:{
			data:{
				type:"UserCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createUsers:{
			data:{
				type:"UsersCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateUser:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"UserUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateUsers:{
			data:{
				type:"UsersUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteUser:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteUsers:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createBusiness:{
			data:{
				type:"BusinessCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createBusinesses:{
			data:{
				type:"BusinessesCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateBusiness:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"BusinessUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateBusinesses:{
			data:{
				type:"BusinessesUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteBusiness:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteBusinesses:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createOffering:{
			data:{
				type:"OfferingCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createOfferings:{
			data:{
				type:"OfferingsCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateOffering:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"OfferingUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateOfferings:{
			data:{
				type:"OfferingsUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteOffering:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteOfferings:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createPurchase:{
			data:{
				type:"PurchaseCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createPurchases:{
			data:{
				type:"PurchasesCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updatePurchase:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"PurchaseUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updatePurchases:{
			data:{
				type:"PurchasesUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deletePurchase:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deletePurchases:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createStaffName:{
			data:{
				type:"StaffNameCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createStaffNames:{
			data:{
				type:"StaffNamesCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateStaffName:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"StaffNameUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateStaffNames:{
			data:{
				type:"StaffNamesUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteStaffName:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteStaffNames:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createForgottenPasswordToken:{
			data:{
				type:"ForgottenPasswordTokenCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createForgottenPasswordTokens:{
			data:{
				type:"ForgottenPasswordTokensCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateForgottenPasswordToken:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"ForgottenPasswordTokenUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateForgottenPasswordTokens:{
			data:{
				type:"ForgottenPasswordTokensUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteForgottenPasswordToken:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteForgottenPasswordTokens:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createBlockContent:{
			data:{
				type:"BlockContentCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createBlockContents:{
			data:{
				type:"BlockContentsCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateBlockContent:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"BlockContentUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateBlockContents:{
			data:{
				type:"BlockContentsUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteBlockContent:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteBlockContents:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createContentPage:{
			data:{
				type:"ContentPageCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createContentPages:{
			data:{
				type:"ContentPagesCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updateContentPage:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"ContentPageUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateContentPages:{
			data:{
				type:"ContentPagesUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deleteContentPage:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deleteContentPages:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		createPassportSession:{
			data:{
				type:"PassportSessionCreateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		createPassportSessions:{
			data:{
				type:"PassportSessionsCreateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		updatePassportSession:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			data:{
				type:"PassportSessionUpdateInput",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updatePassportSessions:{
			data:{
				type:"PassportSessionsUpdateInput",
				array:true,
				arrayRequired:false,
				required:false
			}
		},
		deletePassportSession:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		deletePassportSessions:{
			ids:{
				type:"ID",
				array:true,
				arrayRequired:false,
				required:true
			}
		},
		authenticateUserWithFacebook:{
			itemId:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			accessToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		authenticateUserWithGoogle:{
			itemId:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			},
			accessToken:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		authenticateUserWithPassword:{
			email:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			password:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	OfferingCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OfferingStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		price:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		iAvailable:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingRelateToOneInput:{
		create:{
			type:"OfferingCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"OfferingWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"OfferingWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingsCreateInput:{
		data:{
			type:"OfferingCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingStatusType: "enum",
	OfferingsUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"OfferingUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OfferingStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		price:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		iAvailable:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingWhereInput:{
		AND:{
			type:"OfferingWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"OfferingWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		details:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		details_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		details_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		status:{
			type:"OfferingStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_not:{
			type:"OfferingStatusType",
			array:false,
			arrayRequired:false,
			required:false
		},
		status_in:{
			type:"OfferingStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		status_not_in:{
			type:"OfferingStatusType",
			array:true,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		business_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		price:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		price_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		currency:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		currency_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		description_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		maxSlots:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_not:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_lt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_lte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_gt:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_gte:{
			type:"Int",
			array:false,
			arrayRequired:false,
			required:false
		},
		maxSlots_in:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		},
		maxSlots_not_in:{
			type:"Int",
			array:true,
			arrayRequired:false,
			required:false
		},
		iAvailable:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		iAvailable_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OfferingWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PassportSessionCreateInput:{
		service:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		item:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PassportSessionsCreateInput:{
		data:{
			type:"PassportSessionCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PassportSessionsUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"PassportSessionUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PassportSessionUpdateInput:{
		service:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		item:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PassportSessionWhereInput:{
		AND:{
			type:"PassportSessionWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"PassportSessionWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		service:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		service_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		service_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		serviceUserId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		serviceUserId_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		serviceUserId_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		tokenSecret:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		tokenSecret_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		tokenSecret_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		refreshToken:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		refreshToken_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		refreshToken_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		item:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		item_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PassportSessionWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	PurchaseCreateInput:{
		item:{
			type:"OfferingRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PurchasesCreateInput:{
		data:{
			type:"PurchaseCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PurchasesUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"PurchaseUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PurchaseUpdateInput:{
		item:{
			type:"OfferingRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PurchaseWhereInput:{
		AND:{
			type:"PurchaseWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"PurchaseWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		item:{
			type:"OfferingWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		item_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		business:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		business_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		user:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		user_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PurchaseWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Query:{
		allUsers:{
			where:{
				type:"UserWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		User:{
			where:{
				type:"UserWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allUsersMeta:{
			where:{
				type:"UserWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allBusinesses:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		Business:{
			where:{
				type:"BusinessWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allBusinessesMeta:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allOfferings:{
			where:{
				type:"OfferingWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		Offering:{
			where:{
				type:"OfferingWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allOfferingsMeta:{
			where:{
				type:"OfferingWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allPurchases:{
			where:{
				type:"PurchaseWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		Purchase:{
			where:{
				type:"PurchaseWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allPurchasesMeta:{
			where:{
				type:"PurchaseWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allStaffNames:{
			where:{
				type:"StaffNameWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		StaffName:{
			where:{
				type:"StaffNameWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allStaffNamesMeta:{
			where:{
				type:"StaffNameWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allForgottenPasswordTokens:{
			where:{
				type:"ForgottenPasswordTokenWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		ForgottenPasswordToken:{
			where:{
				type:"ForgottenPasswordTokenWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allForgottenPasswordTokensMeta:{
			where:{
				type:"ForgottenPasswordTokenWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allBlockContents:{
			where:{
				type:"BlockContentWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		BlockContent:{
			where:{
				type:"BlockContentWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allBlockContentsMeta:{
			where:{
				type:"BlockContentWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allContentPages:{
			where:{
				type:"ContentPageWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		ContentPage:{
			where:{
				type:"ContentPageWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allContentPagesMeta:{
			where:{
				type:"ContentPageWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allPassportSessions:{
			where:{
				type:"PassportSessionWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		PassportSession:{
			where:{
				type:"PassportSessionWhereUniqueInput",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		_allPassportSessionsMeta:{
			where:{
				type:"PassportSessionWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	StaffNameCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		useraccount:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNameRelateToManyInput:{
		create:{
			type:"StaffNameCreateInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"StaffNameWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"StaffNameWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNamesCreateInput:{
		data:{
			type:"StaffNameCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNamesUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"StaffNameUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNameUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		useraccount:{
			type:"UserRelateToOneInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNameWhereInput:{
		AND:{
			type:"StaffNameWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"StaffNameWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		position:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		position_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		position_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		useraccount:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		useraccount_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		photo_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		photo_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	StaffNameWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	},
	Upload: "String",
	User:{
		managingBusinesses:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		_managingBusinessesMeta:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		backing:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		_backingMeta:{
			where:{
				type:"BusinessWhereInput",
				array:false,
				arrayRequired:false,
				required:false
			},
			search:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			orderBy:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			skip:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	UserCreateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		isAdmin:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isBusiness:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		managingBusinesses:{
			type:"BusinessRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing:{
			type:"BusinessRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserRelateToManyInput:{
		create:{
			type:"UserCreateInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"UserWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"UserWhereUniqueInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserRelateToOneInput:{
		create:{
			type:"UserCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		connect:{
			type:"UserWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnect:{
			type:"UserWhereUniqueInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		disconnectAll:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UsersCreateInput:{
		data:{
			type:"UserCreateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UsersUpdateInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		},
		data:{
			type:"UserUpdateInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserUpdateInput:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		password:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		isAdmin:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isBusiness:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"Upload",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		managingBusinesses:{
			type:"BusinessRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing:{
			type:"BusinessRelateToManyInput",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserWhereInput:{
		AND:{
			type:"UserWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		OR:{
			type:"UserWhereInput",
			array:true,
			arrayRequired:false,
			required:false
		},
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		id_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		id_not_in:{
			type:"ID",
			array:true,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		name_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		email:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		email_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		email_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		password_is_set:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isAdmin:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isAdmin_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isBusiness:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		isBusiness_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		favoriteFood_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		favoriteFood_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		twitterHandle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		twitterHandle_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		twitterHandle_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		yelpUrl:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		yelpUrl_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		yelpUrl_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		username:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		username_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		username_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		googleId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		googleId_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		googleId_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		facebookId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		facebookId_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		facebookId_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		userSlug:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_contains_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_starts_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_not_ends_with_i:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		userSlug_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		userSlug_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_contains:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_starts_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_not_ends_with:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		image_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		lastLogin:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_lt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_lte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_gt:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_gte:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		lastLogin_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		lastLogin_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		},
		managingBusinesses_every:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		managingBusinesses_some:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		managingBusinesses_none:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		managingBusinesses_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing_every:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing_some:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing_none:{
			type:"BusinessWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		backing_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdAt_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		createdAt_not_in:{
			type:"DateTime",
			array:true,
			arrayRequired:false,
			required:false
		},
		updatedBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		updatedBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy:{
			type:"UserWhereInput",
			array:false,
			arrayRequired:false,
			required:false
		},
		createdBy_is_null:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	UserWhereUniqueInput:{
		id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:true
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	_ListAccess:{
		create:"Boolean",
		read:"JSON",
		update:"JSON",
		delete:"JSON",
		auth:"JSON"
	},
	_ListMeta:{
		name:"String",
		access:"_ListAccess",
		schema:"_ListSchema"
	},
	_ListSchema:{
		type:"String",
		queries:"String",
		relatedFields:"_ListSchemaRelatedFields"
	},
	_ListSchemaRelatedFields:{
		type:"String",
		fields:"String"
	},
	_QueryMeta:{
		count:"Int"
	},
	authenticateUserOutput:{
		token:"String",
		item:"User"
	},
	BlockContent:{
		_label_:"String",
		id:"ID",
		name:"String",
		title:"String",
		subtitle:"String",
		hero:"File",
		image:"CloudinaryImage_File",
		textContent:"String",
		richContent:"String",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	Business:{
		_label_:"String",
		id:"ID",
		name:"String",
		description:"String",
		owner:"User",
		staffMembers:"StaffName",
		_staffMembersMeta:"_QueryMeta",
		profileImage:"CloudinaryImage_File",
		heroImage:"CloudinaryImage_File",
		themeColor:"String",
		location:"Location",
		businessSlug:"String",
		backers:"User",
		_backersMeta:"_QueryMeta",
		status:"BusinessStatusType",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	CloudinaryImage_File:{
		id:"ID",
		path:"String",
		filename:"String",
		originalFilename:"String",
		mimetype:"String",
		encoding:"String",
		publicUrl:"String",
		publicUrlTransformed:"String"
	},
	ContentPage:{
		_label_:"String",
		id:"ID",
		name:"String",
		slug:"String",
		status:"ContentPageStatusType",
		blocks:"BlockContent",
		_blocksMeta:"_QueryMeta",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	File:{
		id:"ID",
		path:"String",
		filename:"String",
		originalFilename:"String",
		mimetype:"String",
		encoding:"String",
		publicUrl:"String"
	},
	ForgottenPasswordToken:{
		_label_:"String",
		id:"ID",
		user:"User",
		token:"String",
		requestedAt:"DateTime",
		accessedAt:"DateTime",
		expiresAt:"DateTime",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	Location:{
		id:"ID",
		googlePlaceID:"String",
		formattedAddress:"String",
		lat:"Float",
		lng:"Float"
	},
	Mutation:{
		createUser:"User",
		createUsers:"User",
		updateUser:"User",
		updateUsers:"User",
		deleteUser:"User",
		deleteUsers:"User",
		createBusiness:"Business",
		createBusinesses:"Business",
		updateBusiness:"Business",
		updateBusinesses:"Business",
		deleteBusiness:"Business",
		deleteBusinesses:"Business",
		createOffering:"Offering",
		createOfferings:"Offering",
		updateOffering:"Offering",
		updateOfferings:"Offering",
		deleteOffering:"Offering",
		deleteOfferings:"Offering",
		createPurchase:"Purchase",
		createPurchases:"Purchase",
		updatePurchase:"Purchase",
		updatePurchases:"Purchase",
		deletePurchase:"Purchase",
		deletePurchases:"Purchase",
		createStaffName:"StaffName",
		createStaffNames:"StaffName",
		updateStaffName:"StaffName",
		updateStaffNames:"StaffName",
		deleteStaffName:"StaffName",
		deleteStaffNames:"StaffName",
		createForgottenPasswordToken:"ForgottenPasswordToken",
		createForgottenPasswordTokens:"ForgottenPasswordToken",
		updateForgottenPasswordToken:"ForgottenPasswordToken",
		updateForgottenPasswordTokens:"ForgottenPasswordToken",
		deleteForgottenPasswordToken:"ForgottenPasswordToken",
		deleteForgottenPasswordTokens:"ForgottenPasswordToken",
		createBlockContent:"BlockContent",
		createBlockContents:"BlockContent",
		updateBlockContent:"BlockContent",
		updateBlockContents:"BlockContent",
		deleteBlockContent:"BlockContent",
		deleteBlockContents:"BlockContent",
		createContentPage:"ContentPage",
		createContentPages:"ContentPage",
		updateContentPage:"ContentPage",
		updateContentPages:"ContentPage",
		deleteContentPage:"ContentPage",
		deleteContentPages:"ContentPage",
		createPassportSession:"passportSession",
		createPassportSessions:"passportSession",
		updatePassportSession:"passportSession",
		updatePassportSessions:"passportSession",
		deletePassportSession:"passportSession",
		deletePassportSessions:"passportSession",
		authenticateUserWithFacebook:"authenticateUserOutput",
		unauthenticateUser:"unauthenticateUserOutput",
		authenticateUserWithGoogle:"authenticateUserOutput",
		authenticateUserWithPassword:"authenticateUserOutput"
	},
	Offering:{
		_label_:"String",
		id:"ID",
		name:"String",
		details:"String",
		status:"OfferingStatusType",
		business:"Business",
		price:"String",
		currency:"String",
		description:"String",
		maxSlots:"Int",
		iAvailable:"Boolean",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	passportSession:{
		_label_:"String",
		id:"ID",
		service:"String",
		serviceUserId:"String",
		tokenSecret:"String",
		refreshToken:"String",
		item:"User"
	},
	Purchase:{
		_label_:"String",
		id:"ID",
		item:"Offering",
		business:"Business",
		user:"User"
	},
	Query:{
		allUsers:"User",
		User:"User",
		_allUsersMeta:"_QueryMeta",
		_UsersMeta:"_ListMeta",
		allBusinesses:"Business",
		Business:"Business",
		_allBusinessesMeta:"_QueryMeta",
		_BusinessesMeta:"_ListMeta",
		allOfferings:"Offering",
		Offering:"Offering",
		_allOfferingsMeta:"_QueryMeta",
		_OfferingsMeta:"_ListMeta",
		allPurchases:"Purchase",
		Purchase:"Purchase",
		_allPurchasesMeta:"_QueryMeta",
		_PurchasesMeta:"_ListMeta",
		allStaffNames:"StaffName",
		StaffName:"StaffName",
		_allStaffNamesMeta:"_QueryMeta",
		_StaffNamesMeta:"_ListMeta",
		allForgottenPasswordTokens:"ForgottenPasswordToken",
		ForgottenPasswordToken:"ForgottenPasswordToken",
		_allForgottenPasswordTokensMeta:"_QueryMeta",
		_ForgottenPasswordTokensMeta:"_ListMeta",
		allBlockContents:"BlockContent",
		BlockContent:"BlockContent",
		_allBlockContentsMeta:"_QueryMeta",
		_BlockContentsMeta:"_ListMeta",
		allContentPages:"ContentPage",
		ContentPage:"ContentPage",
		_allContentPagesMeta:"_QueryMeta",
		_ContentPagesMeta:"_ListMeta",
		allPassportSessions:"passportSession",
		PassportSession:"passportSession",
		_allPassportSessionsMeta:"_QueryMeta",
		_PassportSessionsMeta:"_ListMeta",
		_ksListsMeta:"_ListMeta",
		appVersion:"String",
		authenticatedUser:"User"
	},
	StaffName:{
		_label_:"String",
		id:"ID",
		name:"String",
		position:"String",
		useraccount:"User",
		photo:"CloudinaryImage_File",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	},
	unauthenticateUserOutput:{
		success:"Boolean"
	},
	User:{
		_label_:"String",
		id:"ID",
		name:"String",
		email:"String",
		password_is_set:"Boolean",
		isAdmin:"Boolean",
		isBusiness:"Boolean",
		favoriteFood:"String",
		twitterHandle:"String",
		yelpUrl:"String",
		username:"String",
		googleId:"String",
		facebookId:"String",
		userSlug:"String",
		image:"CloudinaryImage_File",
		lastLogin:"String",
		managingBusinesses:"Business",
		_managingBusinessesMeta:"_QueryMeta",
		backing:"Business",
		_backingMeta:"_QueryMeta",
		updatedAt:"DateTime",
		createdAt:"DateTime",
		updatedBy:"User",
		createdBy:"User"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;
export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
  }
  const typeResolved = resolvedValue.type;
  const isArray: boolean = resolvedValue.array;
  if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? '!' : ''
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${typeResolved}${isRequired}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
      .join(',')}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === 'object') {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values);

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a).map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) => traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*ZEUS_VAR\w*\b[!]?/g;
  let result;
  const AllVariables = [];
  while ((result = regex.exec(query))) {
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};

const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  
const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);

const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((resolve, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(fn)('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'Query')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Query"],Query>,
mutation: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('mutation', 'Mutation')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["Mutation"],Mutation>
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,
mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  