/**
* This file was automatically generated by @abstract-money/ts-codegen@0.37.0-beta-3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

export type AccountTrace = "local" | {
  remote: TruncatedChainId[];
};
export type TruncatedChainId = string;
export interface InstantiateMsg {
  admin_account: AccountId;
  nft_code_id: number;
}
export interface AccountId {
  seq: number;
  trace: AccountTrace;
}
export type ExecuteMsg = {
  ibc_transfer: {
    recipient_chain: TruncatedChainId;
    token_id: string;
  };
} | {
  mint: {
    metadata: XionAdventuresExtensionMsg;
    module_id: string;
    recipient?: AccountId | null;
    token_uri: string;
  };
} | {
  modify_metadata: {
    metadata: XionAdventuresExtensionMsg;
    module_id: string;
    token_id: string;
  };
};
export type PlayerLocation = {
  city: Vec2;
} | {
  general_map: Vec2;
};
export interface XionAdventuresExtensionMsg {
  city_map?: number | null;
  location?: PlayerLocation | null;
}
export interface Vec2 {
  x: number;
  y: number;
}
export type QueryMsg = {
  config: {};
} | {
  next_token_id: {};
};
export interface MigrateMsg {}
export interface ConfigResponse {
  next_token_id: number;
  nft: string;
}
export interface NextTokenIdResponse {
  next_token_id: string;
}