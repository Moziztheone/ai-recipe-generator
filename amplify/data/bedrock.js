// Define the Bedrock provider configuration
export const defineBedrockProvider = () => {
  return {
    provider: "bedrock",
    region: "us-east-1",
    modelId: "anthropic.claude-3-sonnet-20240229-v1:0",
    // Optional additional parameters
    maxTokens: 1000,
    temperature: 0.7,
    topP: 0.9
  };
};
