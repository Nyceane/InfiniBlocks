var GFM = GFM || {};

GFM.coAnalytics = (function (GFM, $) {
    /**
     * SignUp elements to be tracked
     * @type Object
     */
    var signUpElements = {
        btn_header_signup: {
            events: ['click']
        },
        btn_home_signup: {
            events: ['click']
        },
        btn_footer_signingupisfree: {
            events: ['click']
        },
        btn_mobilehome_signup_large: {
            events: ['click']
        },
        btn_sign_up_facebook: {
            events: ['click']
        },
        btn_sign_up_email: {
            events: ['click']
        },
        input_first_name: {
            events: ['blur']
        },
        input_last_name: {
            events: ['blur']
        },
        input_email: {
            events: ['blur']
        },
        input_email_confirm: {
            events: ['blur']
        },
        input_password: {
            events: ['blur']
        },
        btn_sign_up_submit: {
            events: ['click']
        }
    };

    /**
     * SignIn elements to be tracked
     * @type Object
     */
    var signInElements = {
        btn_sign_in: {
            events: ['click']
        },
        btn_mobilehome_signin: {
            events: ['click']
        },
        input_sign_in_email: {
            events: ['blur']
        },
        input_sign_in_password: {
            events: ['blur']
        },
        btn_sign_in_submit: {
            events: ['click']
        },
        btn_sign_in_facebook: {
            events: ['click']
        }
    };

    /**
     * Customize Create elements to be tracked
     * @type Object
     */
    var customizeCreateElements = {

        // Details
        input_fund_goal: {
            events: ['blur']
        },
        input_fund_title: {
            events: ['blur']
        },
        input_fund_zip: {
            events: ['blur']
        },
        select_fund_theme: {
            events: ['click']
        },
        btn_fund_details_submit: {
            events: ['click']
        },
        btn_country_confirm_yes: {
            events: ['click']
        },
        btn_country_confirm_no: {
            events: ['click']
        },
        btn_country_confirm_cancel: {
            events: ['click']
        },
        btn_country_confirm_help: {
            events: ['click']
        },
        input_fund_category: {
            events: ['click']
        },
        input_fund_type: {
            events: ['click']
        },

        // Photo/media picker
        btn_add_facebook_photo: {
            events: ['click']
        },
        btn_upload_photo: {
            events: ['click']
        },
        btn_add_media_video: {
            events: ['click']
        },
        btn_add_media_stock: {
            events: ['click']
        },
        btn_select_stock_photo: {
            events: ['click']
        },
        input_media_video: {
            events: ['blur']
        },
        btn_media_video_attach: {
            events: ['click']
        },
        btn_media_video_next: {
            events: ['click']
        },
        btn_media_picker_prev: {
            events: ['click']
        },

        // Photo display/adjust
        btn_photo_tool_position: {
            events: ['mousedown', 'touchstart']
        },
        btn_photo_tool_rotate: {
            events: ['click']
        },
        btn_photo_tool_remove: {
            events: ['click']
        },
        btn_photo_tool_set_position: {
            events: ['click']
        },
        btn_photo_tool_prev: {
            events: ['click']
        },
        btn_photo_tool_submit: {
            events: ['click']
        },

        // Description
        input_fund_desc: {
            events: ['blur']
        },
        btn_fund_desc_bold_text: {
            events: ['click']
        },
        btn_fund_desc_insert_link: {
            events: ['click']
        },
        btn_fund_desc_add_content: {
            events: ['click']
        },
        btn_fund_desc_more_text: {
            events: ['click']
        },
        btn_fund_desc_insert_media: {
            events: ['click']
        },
        btn_fund_desc_preview: {
            events: ['click']
        },
        btn_fund_desc_rotate_photo: {
            events: ['click']
        },
        btn_fund_desc_remove_photo: {
            events: ['click']
        },
        btn_fund_desc_save_photo: {
            events: ['click']
        },
        btn_fund_desc_prev: {
            events: ['click']
        },
        btn_fund_desc_save: {
            events: ['click']
        },
        btn_fund_desc_submit: {
            events: ['click']
        },

        // GROW-628 Writing Tips Mobile
        btn_writing_tips_invite: {
            events: ['click']
        },

        // Reward levels
        btn_fund_desc_reward_level: {
            events: ['click']
        },
        btn_fund_desc_wish_list: {
            events: ['click']
        },
        input_reward_level_amount: {
            events: ['blur']
        },
        check_reward_set_limit: {
            events: ['click']
        },
        input_reward_level_name: {
            events: ['blur']
        },
        input_reward_level_quantity: {
            events: ['blur']
        },
        input_reward_level_desc: {
            events: ['blur']
        },
        btn_reward_level_save: {
            events: ['click']
        },

        // Wish lists
        input_wish_list_amount: {
            events: ['blur']
        },
        input_wish_list_name: {
            events: ['blur']
        },
        input_wish_list_search: {
            events: ['blur']
        },
        btn_wish_list_search: {
            events: ['click']
        },
        btn_wish_list_search_back: {
            events: ['click']
        },
        btn_wish_list_search_next: {
            events: ['click']
        },
        btn_wish_list_save: {
            events: ['click']
        },
        btn_fund_addon_switch: {
            events: ['click']
        },
        btn_fund_addon_manage: {
            events: ['click']
        },

        // Verification
        input_verification_phone: {
            events: ['blur']
        },
        input_verification_method_sms: {
            events: ['click']
        },
        input_verification_method_voice: {
            events: ['click']
        },
        btn_verification_send_code: {
            events: ['click']
        },
        btn_verification_skip: {
            events: ['click']
        },
        btn_mfa_setup_contact: {
            events: ['click']
        },
        btn_mfa_preverify_send: {
            events: ['click']
        },
        btn_mfa_preverify_reset: {
            events: ['click']
        },
        btn_mfa_preverify_contact: {
            events: ['click']
        },
        btn_mfa_preverify_cancel: {
            events: ['click']
        },

        // mfa verify
        btn_mfa_verify_cancel: {
            events: ['click']
        },
        btn_mfa_verify_reset: {
            events: ['click']
        },
        btn_mfa_verify_resend: {
            events: ['click']
        },
        btn_mfa_verify_resend_contact: {
            events: ['click']
        },
        input_mfa_verify_remember: {
            events: ['click']
        },
        btn_mfa_verify_submit: {
            events: ['click']
        },
        btn_mfa_verify_back: {
            events: ['click']
        },
        btn_mfa_verify_contact: {
            events: ['click']
        }
    };

    /**
     * Share elements to be tracked
     * @type Object
     */
    var shareElements = {

        // Facebook photo
        btn_facebook_photo_prev: {
            events: ['click']
        },
        btn_facebook_photo_skip: {
            events: ['click']
        },
        btn_facebook_photo_important_prev: {
            events: ['click']
        },
        btn_facebook_photo_important_skip: {
            events: ['click']
        },

        // Contacts
        input_invite_contacts_email: {
            events: ['blur']
        },
        btn_contacts_import_gmail: {
            events: ['click']
        },
        btn_contacts_import_yahoo: {
            events: ['click']
        },
        btn_contacts_import_hotmail: {
            events: ['click']
        },
        btn_contacts_import_manual: {
            events: ['click']
        },
        btn_import_contacts_skip: {
            events: ['click']
        },
        btn_invite_contacts_prev: {
            events: ['click']
        },
        btn_invite_contacts_skip: {
            events: ['click']
        },
        btn_invite_contacts_cancel: {
            events: ['click']
        },
        btn_invite_contacts: {
            events: ['click']
        },

        // Share Email Targeted
        btn_shareemailtargeted_connect: {
            events: ['click']
        },
        btn_shareemailtargeted_manual: {
            events: ['click']
        },

        // Share Email Targeted Choose
        btn_shareemailtargetedchoose_send: {
            events: ['click']
        },

        // Share WhatsApp
        btn_wa_shareflow_w: {
            events: ['click']
        },

        // Friends on Gofundme
        btn_friendsongofundme_connect: {
            events: ['click']
        },

        // Facebook post
        btn_fb_shareflow_w: {
            events: ['click']
        },
        btn_fb_shareflow_prev: {
            events: ['click']
        },
        btn_fb_shareflow_skip: {
            events: ['click']
        },

        // Facebook post important
        btn_fbpost_important_post: {
            events: ['click']
        },
        btn_fbpost_important_prev: {
            events: ['click']
        },
        btn_fbpost_important_skip: {
            events: ['click']
        },

        // GROW-554 CO No Share Survey
        btn_launch_no_share_survey: {
            events: ['click']
        },
        btn_contact_coach: {
            events: ['click']
        },
        btn_contact_coach_cancel: {
            events: ['click']
        },
        btn_no_share_feedback: {
            events: ['click']
        },
        btn_survey_other_cancel: {
            events: ['click']
        },

        // Facebook daily post
        btn_fb_daily_post: {
            events: ['click']
        },
        btn_fb_daily_prev: {
            events: ['click']
        },
        btn_fb_daily_skip: {
            events: ['click']
        },

        // Text friends
        btn_text_share_send: {
            events: ['click']
        },
        btn_text_share_prev: {
            events: ['click']
        },
        btn_text_share_skip: {
            events: ['click']
        },

        // Text friends important
        btn_text_share_important_send: {
            events: ['click']
        },
        btn_text_share_important_prev: {
            events: ['click']
        },
        btn_text_share_important_skip: {
            events: ['click']
        },

        // Facebook private message
        btn_fb_private_compose: {
            events: ['click']
        },
        btn_fb_private_prev: {
            events: ['click']
        },
        btn_fb_private_skip: {
            events: ['click']
        },

        // Twitter share
        btn_twitter_post: {
            events: ['click']
        },
        btn_twitter_prev: {
            events: ['click']
        },
        btn_twitter_skip: {
            events: ['click']
        },

        // Nextdoor share
        btn_nextdoor_prev: {
            events: ['click']
        },
        btn_nextdoor_skip: {
            events: ['click']
        },

        // Campaign link
        btn_fund_link_prev: {
            events: ['click']
        },
        btn_fund_link_next: {
            events: ['click']
        },
        btn_fund_link_custom: {
            events: ['click']
        },

        // Custom campaign link
        btn_fund_link_custom_submit: {
            events: ['click']
        },
        btn_fund_link_custom_cancel: {
            events: ['click']
        },
        input_fund_link_custom: {
            events: ['blur']
        }
    };

    /**
     * Dashboard elements to be tracked
     * @type Object
     */
    var dashboardElements = {
        // Nav Bar Buttons
        btn_dashnav_dashboard: {
            events: ['click']
        },
        btn_dashnav_share: {
            events: ['click']
        },
        btn_dashnav_edit: {
            events: ['click']
        },
        btn_dashnav_withdraw: {
            events: ['click']
        },
        btn_dashnav_help: {
            events: ['click']
        },
        btn_dashnav_more: {
            events: ['click']
        },
        btn_dashnav_donations: {
            events: ['click']
        },
        btn_dashnav_comments: {
            events: ['click']
        },
        btn_dashnav_updates: {
            events: ['click']
        },
        btn_dashnav_contacts: {
            events: ['click']
        },
        btn_dashnav_widgets: {
            events: ['click']
        },
        btn_dashnav_view_campaign: {
            events: ['click']
        },
        btn_dashnav_new_campaign: {
            events: ['click']
        },
        btn_dashnav_more_transfer_money: {
            events: ['click']
        },
        btn_dashnav_account_menu: {
            events: ['click']
        },
        btn_dashnav_account_withdraw: {
            events: ['click']
        },
        btn_dashnav_ask_question: {
            events: ['click']
        },
        btn_dashnav_fundraiser_toolkit: {
            events: ['click']
        },
        btn_dashnav_account_settings: {
            events: ['click']
        },
        btn_dashnav_account_transfer_money: {
            events: ['click']
        },
        btn_dashnav_sign_out: {
            events: ['click']
        },

        // UI / UX Buttons
        btn_toggle_campaign_activity: {
            events: ['click']
        },

        // Campaign Details Panel
        btn_details_campaign_title: {
            events: ['click']
        },
        btn_details_edit_icon: {
            events: ['click']
        },
        input_details_campaign_url: {
            events: ['blur']
        },
        btn_details_tweet: {
            events: ['click']
        },
        btn_details_view_campaign: {
            events: ['click']
        },

        // tipping opt in lightbox
        btn_tippingoptin_accept: {
            events: ['click']
        },
        btn_tippingoptin_decline: {
            events: ['click']
        },

        // Update Panel
        input_update_desc: {
            events: ['blur']
        },
        btn_update_add_media: {
            events: ['click']
        },
        btn_update_remove_media: {
            events: ['click']
        },
        btn_update_connect_facebook: {
            events: ['click']
        },
        btn_update_connect_facebook_tooltip: {
            events: ['click']
        },
        btn_update_toggle_facebook: {
            events: ['click']
        },
        btn_update_connect_twitter: {
            events: ['click']
        },
        btn_update_connect_twitter_tooltip: {
            events: ['click']
        },
        btn_update_toggle_twitter: {
            events: ['click']
        },
        btn_update_invite_email_contacts: {
            events: ['click']
        },
        btn_update_invite_email_contacts_tooltip: {
            events: ['click']
        },
        btn_update_toggle_email_contacts: {
            events: ['click']
        },
        btn_update_post_update: {
            events: ['click']
        },
        btn_update_cancel_post_update: {
            events: ['click']
        },

        // Campaign Activity Panel
        btn_activity_add_offline_donation: {
            events: ['click']
        },
        btn_activity_all_activity: {
            events: ['click']
        },
        btn_activity_donations: {
            events: ['click']
        },
        btn_activity_comments: {
            events: ['click']
        },
        btn_activity_updates: {
            events: ['click']
        },
        lnk_activity_fbshare: {
            events: ['click']
        },
        btn_activity_feed_prev: {
            events: ['click']
        },
        btn_activity_feed_next: {
            events: ['click']
        },

        // Campaign Activity Panel - Donations
        btn_activity_donation_options: {
            events: ['click']
        },
        btn_activity_donation_thank_you: {
            events: ['click']
        },
        btn_activity_donation_make_public: {
            events: ['click']
        },
        btn_activity_donation_make_anon: {
            events: ['click']
        },
        btn_activity_donation_delete: {
            events: ['click']
        },
        btn_activity_donation_delete_confirm: {
            events: ['click']
        },
        btn_activity_donation_delete_cancel: {
            events: ['click']
        },
        btn_activity_donation_say_thanks: {
            events: ['click']
        },
        btn_activity_donation_thanks_dropdown: {
            events: ['click']
        },
        btn_activity_donation_view_thank_you: {
            events: ['click']
        },
        btn_activity_donation_thank_you_again: {
            events: ['click']
        },

        // Campaign Activity Panel - Comments
        btn_activity_comment_options: {
            events: ['click']
        },
        btn_activity_comment_delete: {
            events: ['click']
        },
        btn_activity_comment_delete_confirm: {
            events: ['click']
        },
        btn_activity_comment_delete_cancel: {
            events: ['click']
        },

        // Campaign Activity Panel - Updates
        btn_activity_update_options: {
            events: ['click']
        },
        btn_activity_update_edit: {
            events: ['click']
        },
        btn_activity_update_delete: {
            events: ['click']
        },
        btn_activity_update_delete_confirm: {
            events: ['click']
        },
        btn_activity_update_delete_cancel: {
            events: ['click']
        },

        // Stats Panel
        btn_stats_add_facebook: {
            events: ['click']
        },
        btn_stats_add_facebook_tooltip: {
            events: ['click']
        },
        btn_stats_add_email_contacts_tooltip: {
            events: ['click']
        },
        btn_stats_add_email_contacts: {
            events: ['click']
        },

        // Explore Features Panel
        btn_explore_share_facebook: {
            events: ['click']
        },
        btn_explore_edit_campaign: {
            events: ['click']
        },
        btn_explore_view_campaign: {
            events: ['click']
        },
        btn_explore_set_campaign_link: {
            events: ['click']
        },
        btn_explore_embed_widget: {
            events: ['click']
        },
        btn_explore_campaign_sign: {
            events: ['click']
        },
        btn_explore_withdraw: {
            events: ['click']
        },
        btn_explore_account_settings: {
            events: ['click']
        },
        btn_explore_support: {
            events: ['click']
        },

        // Get Mobile App Panel
        btn_mobile_app: {
            events: ['click']
        }
    };


    var withdrawElements = {
        // kyc
        btn_kyc_start_back: {
            events: ['click']
        },
        btn_kyc_start_continue: {
            events: ['click']
        },
        btn_kyc_start_contact: {
            events: ['click']
        },
        btn_kyc_form_bene: {
            events: ['click']
        },
        btn_kyc_form_ssn: {
            events: ['click']
        },
        btn_kyc_form_finish: {
            events: ['click']
        },
        btn_kyc_form_contact: {
            events: ['click']
        },

        // settlement
        btn_settlement_no_balance_contact: {
            events: ['click']
        },
        btn_settlement_no_balance_share: {
            events: ['click']
        },
        btn_settlement_no_balance_back: {
            events: ['click']
        },
        btn_settlement_pending_balance_contact: {
            events: ['click']
        },
        btn_settlement_pending_balance_back: {
            events: ['click']
        },
        btn_settlement_picker_bank: {
            events: ['click']
        },
        btn_settlement_picker_check: {
            events: ['click']
        },
        btn_settlement_picker_contact: {
            events: ['click']
        },
        btn_settlement_picker_bene: {
            events: ['click']
        },
        btn_settlement_picker_confirm_bank: {
            events: ['click']
        },
        btn_settlement_picker_confirm_check: {
            events: ['click']
        },
        btn_settlement_picker_confirm_back: {
            events: ['click']
        },
        btn_settlement_bank_back: {
            events: ['click']
        },
        btn_settlement_bank_contact: {
            events: ['click']
        },
        btn_settlement_bank_confirm_submit: {
            events: ['click']
        },
        btn_settlement_bank_success_next: {
            events: ['click']
        },
        btn_settlement_bank_success_contact: {
            events: ['click']
        },
        btn_settlement_check_back: {
            events: ['click']
        },
        btn_settlement_check_contact: {
            events: ['click']
        },
        btn_settlement_check_confirm_back: {
            events: ['click']
        },
        btn_settlement_check_confirm_cancel: {
            events: ['click']
        },
        btn_settlement_check_confirm_submit: {
            events: ['click']
        },
        btn_settlement_check_success_dashboard: {
            events: ['click']
        },
        btn_settlement_check_success_contact: {
            events: ['click']
        },

        // withdrawal intro
        btn_withdrawal_intro_back: {
            events: ['click']
        },

        btn_withdrawal_intro_continue: {
            events: ['click']
        },

        // beneficiary picker
        btn_beneficiary_picker_other: {
            events: ['click']
        },
        btn_beneficiary_picker_self: {
            events: ['click']
        },
        btn_beneficiary_picker_contact: {
            events: ['click']
        },
        btn_beneficiary_picker_reverse: {
            events: ['click']
        },
        btn_beneficiary_picker_prefill_submit: {
            events: ['click']
        },
        btn_beneficiary_picker_cancel: {
            events: ['click']
        },

        // beneficiary intent reverse
        btn_beneficiary_reverse_intent_confirm: {
            events: ['click']
        },
        btn_beneficiary_reverse_intent_cancel: {
            events: ['click']
        },
        btn_beneficiary_reverse_intent_contact: {
            events: ['click']
        },

        // beneficiary invite flow
        btn_beneficiary_invite_continue: {
            events: ['click']
        },
        btn_beneficiary_invite_cancel: {
            events: ['click']
        },
        btn_beneficiary_invite_back: {
            events: ['click']
        },
        btn_beneficiary_invite_reverse: {
            events: ['click']
        },
        btn_beneficiary_invite_contact: {
            events: ['click']
        },
        btn_beneficiary_invite_confirm_contact: {
            events: ['click']
        },
        btn_beneficiary_invite_confirm_back: {
            events: ['click']
        },
        btn_beneficiary_invite_confirm_send: {
            events: ['click']
        },
        btn_beneficiary_pending_resend: {
            events: ['click']
        },
        btn_beneficiary_pending_other: {
            events: ['click']
        },
        btn_beneficiary_pending_ok: {
            events: ['click']
        },
        btn_beneficiary_pending_cancel: {
            events: ['click']
        },
        btn_beneficiary_pending_contact: {
            events: ['click']
        },
        btn_beneficiary_invite_confirm_cancel: {
            events: ['click']
        },

        // beneficiary claim flow
        btn_beneficiary_claim_accept: {
            events: ['click']
        },
        btn_beneficiary_claim_decline: {
            events: ['click']
        },
        btn_beneficiary_claim_decline_accept: {
            events: ['click']
        },
        btn_beneficiary_claim_decline_confirm: {
            events: ['click']
        },
        btn_beneficiary_claim_decline_contact: {
            events: ['click']
        },
        btn_beneficiary_claim_declined_contact: {
            events: ['click']
        },
        btn_beneficiary_signup: {
            events: ['click']
        },
        btn_beneficiary_signup_contact: {
            events: ['click']
        },
        btn_beneficiary_signin: {
            events: ['click']
        },
        btn_beneficiary_signin_fb: {
            events: ['click']
        },
        btn_beneficiary_signin_forgotpw: {
            events: ['click']
        },
        btn_beneficiary_confirm_resend: {
            events: ['click']
        },
        btn_beneficiary_confirm_contact: {
            events: ['click']
        },

        // withdraw dash
        btn_withdraw_dash_edit_bank: {
            events: ['click']
        },
        btn_withdraw_dash_edit_check: {
            events: ['click']
        },
        btn_withdraw_dash_export: {
            events: ['click']
        },
        btn_withdraw_dash_help_when: {
            events: ['click']
        },
        btn_withdraw_dash_help_fees: {
            events: ['click']
        },
        btn_withdraw_dash_help_bank: {
            events: ['click']
        },
        btn_withdraw_dash_help_bank_link: {
            events: ['click']
        },
        btn_withdraw_dash_help_check: {
            events: ['click']
        },
        btn_withdraw_dash_help_check_link: {
            events: ['click']
        },
        btn_withdraw_dash_help_frequency: {
            events: ['click']
        },
        btn_withdraw_dash_help_frequency_link: {
            events: ['click']
        },
        btn_withdraw_dash_help: {
            events: ['click']
        },
        btn_withdraw_dash_contact: {
            events: ['click']
        },
        btn_withdraw_freq_contact: {
            events: ['click']
        },
        btn_withdraw_freq_next: {
            events: ['click']
        },
        btn_withdraw_freq_submit: {
            events: ['click']
        },
        btn_withdraw_freq_back: {
            events: ['click']
        }
    };

    /**
     * Google Analytics Categories
     * Sections or flows to be tracked
     * @type Object
     */
    var trackingCategories = {
        signUp: 'co_sign_up',
        signIn: 'co_sign_in',
        campaignCreation: 'co_campaign_creation',
        campaignShare: 'co_campaign_share',
        dashboard: 'co_dashboard',
        withdraw: 'co_withdraw'
    };

    /**
     * Tracking events
     * @type Object
     */
    var track = {
        /**
         * Used for basic event tracking
         * Good for events such as click, blur, focus, etc
         * @param event
         */
        event : function(event) {
            if (event.data
                && event.type
                && event.data.hasOwnProperty('category')
                && event.data.hasOwnProperty('id')
            ) {
                /*
                 * Google Analytics tracking
                */
                GFM.gaEventTracking.trackEvent(event.data.category, event.type, event.data.id, event.data.value);

                /*
                 * Redshift tracking
                */
                var datum = {
                    'elementid': event.data.id,
                    'viewid': GFM.analytics.data.viewid,
                    'gfm': {
                        'event_category': event.data.category,
                        'event': event.type + '_' + event.data.id
                    }
                };

                // Hack to force viewid for all dashboard click tracking to the same viewid. This is necessary due to bug with
                // the controller_extended->_json method, where we are setting viewid on every ajax request.  This does not work
                // for ajax requests that do not display a new page, as the viewid will get changed to name of the endpoint
                if (event.data.category === trackingCategories.dashboard) {
                    datum.viewid = 'pg_dashboard3_index';
                }

                // If this is a blur event, grab the text of the input
                var target = $(event.target).closest('[data-gfm-analytics-element]');
                if(event.type === 'blur'){

                    // Don't send passwords
                    if(!target.is('[type="password"]')){
                        var inputValue = target.val();
                        if(typeof(inputValue) !== 'undefined'){
                            datum.gfm.event_meta = inputValue.substring(0,64);
                        }
                    }
                }

                // If explicit meta value is set, use it
                if(typeof(target.data('gfm-analytics-meta')) !== 'undefined'){
                    datum.gfm.event_meta = target.data('gfm-analytics-meta');
                }

                // GROW-374 Campaign Tips Tracking
                if (event.data.id == 'btn_fund_desc_submit') {
                    var content = $('#Funds_funddescription_ifr').contents().find('body').text();
                    if (content !== undefined && content.length >= 30) {
                        GFM.analytics.track_client_event('fund_desc', 'submit', 'success', {'desc_length' : content.length});
                    }
                }

                GFM.analytics.track_event('mp_page_click', datum);

                /*
                // Debug logging
                if (!window.dataLayer || !(window.dataLayer instanceof Array)) {
                    var textValue = typeof(datum.gfm.event_meta) !== 'undefined' ? datum.gfm.event_meta : 'none';
                    console.log('\n' + datum.gfm.event_category + ' | ' + datum.gfm.event + ' | mp_page_click | ' + datum.viewid + ' | ' + datum.elementid + ' | ' + textValue);
                }
                */

            }
        },

        /**
         * Manual trigger for custom events
         * @param data
         */
        custom : function(data) {
            if (data.hasOwnProperty('category') && data.hasOwnProperty('event')) {

                /*
                 * Google Analytics tracking
                */
                GFM.gaEventTracking.trackEvent(data.category, data.event, data.view);

                /*
                 * Redshift tracking
                */
                var datum = {
                    'viewid': GFM.analytics.data.viewid,
                    'gfm': {
                        'event_category': data.category,
                        'event': data.event
                    }
                };

                if(data.hasOwnProperty('meta')){
                    datum.gfm.event_meta = data.meta;
                }

                GFM.analytics.track_event('mp_page_view', datum);

                // Debug
                if (!window.dataLayer || !(window.dataLayer instanceof Array)) {
                    var textValue = typeof(datum.gfm.event_meta) !== 'undefined' ? datum.gfm.event_meta : 'none';
                    console.log('\n' + datum.gfm.event_category + ' | ' + datum.gfm.event + ' | mp_page_view | ' + datum.viewid + ' | ' + textValue);
                }
            }
        }
    };

    var element = {

        /**
         * Get data associated with key
         * @param key
         * @returns {*}
         */
        data: function (key) {
            var data = null;
            if (key in signUpElements) {
                data = signUpElements[key];
                data.category = trackingCategories.signUp;
            } else if (key in signInElements) {
                data = signInElements[key];
                data.category = trackingCategories.signIn;
            } else if (key in customizeCreateElements) {
                data = customizeCreateElements[key];
                data.category = trackingCategories.campaignCreation;
            } else if (key in shareElements) {
                data = shareElements[key];
                data.category = trackingCategories.campaignShare;
            } else if (key in dashboardElements) {
                data = dashboardElements[key];
                data.category = trackingCategories.dashboard;
            } else if (key in withdrawElements) {
                data = withdrawElements[key];
                data.category = trackingCategories.withdraw;
            }

            if (data !== null) {
                data.id = key;
            }
            return data;
        },

        /**
         * Return element id
         * @param $element
         * @returns {*}
         */
        getId : function ($element) {
            return $element.data('gfmAnalyticsElement');
        },

        /**
         * Return tracked status or set if param provided
         * @param $element
         * @param status
         * @returns {*}
         */
        isTracked : function ($element, status) {
            if (status !== true) {
                $element.data('gfmAnalyticsElementTracked', status);
            }
            return $element.data('gfmAnalyticsElementTracked');
        }
    };


    /**
     * Starts tracking elements on the page
     * We bind directly to the element to get around event.stopPropagation();
     */
    var startTracking = function () {
        $('[data-gfm-analytics-element]').each(function () {
            var $element = $(this);
            if (!element.isTracked($element)) {
                var id = element.getId($element);
                var data = element.data(id);
                if (data && data.hasOwnProperty('events')) {
                    $element.data('gfmAnalyticsElementTracked', true); // Prevents event handler from binding multiple times
                    element.isTracked($element, true);
                    $element.on(data.events.join(' '), data, track.event);
                }
            }
        });
    };

    // Bind events
    try {
        $(function(){
            startTracking();
            // This allows us to bind to new dynamic elements directly
            // instead of binding to the body which has both performance concerns
            // and is unreliable if event.stopPropagation(); is used
            setInterval(startTracking, 500);
        });
    } catch (e) {
        if (window.console) {
            window.console.log('Exception Thrown: ' + e.message);
        }
    }

    return {
        element: element,
        track: track
    };

})(GFM, jQuery);
