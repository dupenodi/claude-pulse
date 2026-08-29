(() => {
	'use strict';

	const CC = (globalThis.ClaudeCounter = globalThis.ClaudeCounter || {});

	CC.DOM = Object.freeze({
		// claude.ai removed chat-menu-trigger (~Jun 2026); try newer anchors first
		CHAT_HEADER_ANCHORS: [
			'[data-testid="chat-title-split"]',
			'button:has(span.font-base-bold)',
			'[data-testid="chat-menu-trigger"]',
			'header button[aria-haspopup="menu"]',
			'header button[aria-label*="chat" i]'
		],
		MODEL_SELECTOR_DROPDOWN: '[data-testid="model-selector-dropdown"]',
		MODEL_SELECTOR_ANCHORS: [
			'[data-testid="model-selector-dropdown"]',
			'button[aria-label^="Model:"]',
			'button[aria-haspopup="menu"][aria-label*="Sonnet" i]',
			'button[aria-haspopup="menu"][aria-label*="Opus" i]',
			'button[aria-haspopup="menu"][aria-label*="Haiku" i]',
			'[data-testid*="model-selector"]'
		],
		BRIDGE_SCRIPT_ID: 'cc-bridge-script'
	});

	CC.findHeaderAnchor = () => {
		for (const selector of CC.DOM.CHAT_HEADER_ANCHORS) {
			try {
				const el = document.querySelector(selector);
				if (el) return el;
			} catch {
				// ignore selector exceptions
			}
		}
		return null;
	};

	CC.findModelSelector = () => {
		for (const selector of CC.DOM.MODEL_SELECTOR_ANCHORS) {
			try {
				const el = document.querySelector(selector);
				if (el) return el;
			} catch {
				// ignore selector exceptions
			}
		}
		return null;
	};

	CC.CONST = Object.freeze({
		CACHE_WINDOW_MS: 5 * 60 * 1000,
		CONTEXT_LIMIT_TOKENS: 200000
	});

	CC.COLORS = Object.freeze({
		PROGRESS_FILL_DARK: 'rgba(255, 255, 255, 0.45)',
		PROGRESS_FILL_LIGHT: 'rgba(0, 0, 0, 0.30)',
		PROGRESS_TRACK_DARK: 'rgba(255, 255, 255, 0.08)',
		PROGRESS_TRACK_LIGHT: 'rgba(0, 0, 0, 0.06)',
		PROGRESS_OUTLINE_DARK: 'transparent',
		PROGRESS_OUTLINE_LIGHT: 'transparent',
		PROGRESS_MARKER_DARK: 'rgba(255, 255, 255, 0.7)',
		PROGRESS_MARKER_LIGHT: 'rgba(0, 0, 0, 0.5)',
		AMBER_WARNING: '#d97706',
		CRITICAL_WARNING: '#ef4444',
		CACHE_ACTIVE_DARK: 'rgba(74, 222, 128, 0.8)',
		CACHE_ACTIVE_LIGHT: '#16a34a',
		BOLD_LIGHT: '#141413',
		BOLD_DARK: '#faf9f5'
	});
})();
