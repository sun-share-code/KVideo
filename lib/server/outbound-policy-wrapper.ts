// Runtime-aware outbound policy module
// Uses simplified version for Edge runtime (doesn't support Node.js DNS/Net modules)

export {
  OutboundPolicyError,
  OutboundValidationOptions,
  assertOutboundUrlAllowed,
  fetchWithPolicy,
  sanitizeHeaderMap,
  sanitizeUserAgent,
  sanitizeReferer,
  getRelayForwardHeaders,
} from './outbound-policy-edge';