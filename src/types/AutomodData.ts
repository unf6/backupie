import { Snowflake, AutoModerationActionType, AutoModerationRuleTriggerType, AutoModerationRuleEventType, AutoModerationTriggerMetadata } from 'discord.js';

export interface ExemptRoleData {
    id: string;
    name: string;
}

export interface ExemptChannelData {
    id: string;
    name: string;
}

export interface AutoModerationActionMetadataData {
    channelId?: Snowflake;
    channelName?: string;
    durationSeconds?: number;
    customMessage?: string;
}

export interface AutoModRuleActionData {
    type: AutoModerationActionType;
    metadata: AutoModerationActionMetadataData;
}

export interface AutoModRuleData {
    name: string;
    eventType: AutoModerationRuleEventType;
    triggerType: AutoModerationRuleTriggerType;
    triggerMetadata: AutoModerationTriggerMetadata;
    actions: AutoModRuleActionData[];
    enabled: boolean;
    exemptRoles: ExemptRoleData[],
    exemptChannels: ExemptChannelData[],
}
