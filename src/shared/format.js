(() => {
	'use strict';

	const CC = (globalThis.ClaudeCounter = globalThis.ClaudeCounter || {});

	CC.format = {
		formatSeconds(totalSeconds) {
			const minutes = Math.floor(totalSeconds / 60);
			const seconds = totalSeconds % 60;
			return `${minutes}:${String(seconds).padStart(2, '0')}`;
		},

		formatResetCountdown(timestampMs) {
			const diffMs = timestampMs - Date.now();
			if (diffMs <= 0) return '0s';

			const totalSeconds = Math.floor(diffMs / 1000);
			if (totalSeconds < 60) return `${totalSeconds}s`;

			const totalMinutes = Math.round(totalSeconds / 60);
			if (totalMinutes < 60) return `${totalMinutes}m`;

			const hours = Math.floor(totalMinutes / 60);
			const minutes = totalMinutes % 60;
			if (hours < 24) return `${hours}h ${minutes}m`;

			const days = Math.floor(hours / 24);
			const remHours = hours % 24;
			return `${days}d ${remHours}h`;
		},

		formatUsagePct(rawPct) {
			return `${Math.round(rawPct)}%`;
		},

		formatRemaining(resetMs) {
			if (resetMs == null || !Number.isFinite(resetMs)) return '';
			return this.formatResetCountdown(resetMs);
		},

		formatUsageReset(resetMs) {
			const remaining = this.formatRemaining(resetMs);
			if (!remaining) return '';
			return `resets in ${remaining}`;
		},

		formatUsageStripText(rawPct, resetMs) {
			const parts = [`${this.formatUsagePct(rawPct)} used`];
			const reset = this.formatUsageReset(resetMs);
			if (reset) parts.push(reset);
			return parts.join(' · ');
		}
	};
})();
