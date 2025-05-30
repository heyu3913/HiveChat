import { LLMModel, LLMModelProvider } from "@/types/llm"
export const provider: LLMModelProvider = {
  id: 'claude',
  providerName: 'Claude',
}

export const modelList: LLMModel[] = [
  {
    'id': 'claude-3-7-sonnet-20250219',
    'displayName': 'Claude 3.7 Sonnet',
    'supportVision': true,
    'supportTool': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  },
  {
    'id': 'claude-3-5-sonnet-20241022',
    'displayName': 'Claude 3.5 Sonnet',
    'supportVision': true,
    'supportTool': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  },
  {
    'id': 'claude-3-5-haiku-20241022',
    'displayName': 'Claude 3.5 Haiku',
    'supportVision': true,
    'supportTool': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  },
  {
    'id': 'claude-3-sonnet-20240229',
    'displayName': 'Claude 3 Sonnet',
    'supportVision': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  },
  {
    'id': 'claude-3-opus-20240229',
    'displayName': 'Claude 3 Opus',
    'supportVision': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  },

  {
    'id': 'claude-3-haiku-20240307',
    'displayName': 'Claude 3 Haiku',
    'supportVision': true,
    'maxTokens': 204800,
    'selected': true,
    provider
  }
]