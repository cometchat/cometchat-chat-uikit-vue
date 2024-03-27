import { PropType } from "vue";
import { CallscreenStyle } from "@cometchat/uikit-elements";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CallWorkflow } from "@cometchat/uikit-resources";
declare const _sfc_main: import("vue").DefineComponent<{
    callSettingsBuilder: {
        type: any;
    };
    sessionID: {
        type: StringConstructor;
        default: string;
    };
    ongoingCallStyle: {
        type: PropType<CallscreenStyle>;
        default: () => CallscreenStyle;
    };
    resizeIconHoverText: {
        type: StringConstructor;
        default: () => any;
    };
    minimizeIconURL: {
        type: StringConstructor;
        default: string;
    };
    maximizeIconURL: {
        type: StringConstructor;
        default: string;
    };
    callWorkflow: {
        type: PropType<CallWorkflow>;
        default: () => CallWorkflow;
    };
    onError: {
        type: PropType<(error: CometChat.CometChatException) => void>;
        default: (error: CometChat.CometChatException) => void;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    callSettingsBuilder: {
        type: any;
    };
    sessionID: {
        type: StringConstructor;
        default: string;
    };
    ongoingCallStyle: {
        type: PropType<CallscreenStyle>;
        default: () => CallscreenStyle;
    };
    resizeIconHoverText: {
        type: StringConstructor;
        default: () => any;
    };
    minimizeIconURL: {
        type: StringConstructor;
        default: string;
    };
    maximizeIconURL: {
        type: StringConstructor;
        default: string;
    };
    callWorkflow: {
        type: PropType<CallWorkflow>;
        default: () => CallWorkflow;
    };
    onError: {
        type: PropType<(error: CometChat.CometChatException) => void>;
        default: (error: CometChat.CometChatException) => void;
    };
}>>, {
    onError: (error: CometChat.CometChatException) => void;
    ongoingCallStyle: CallscreenStyle;
    callSettingsBuilder: any;
    sessionID: string;
    resizeIconHoverText: string;
    minimizeIconURL: string;
    maximizeIconURL: string;
    callWorkflow: CallWorkflow;
}, {}>;
export default _sfc_main;
