/**
 * AppSync resolver for the askBedrock query
 */
import { util } from '@aws-appsync/utils';

export function request(ctx) {
  const { prompt } = ctx.args;
  
  return {
    operation: 'InvokeModel',
    modelId: 'anthropic.claude-3-sonnet-20240229-v1:0',
    body: {
      anthropic_version: "bedrock-2023-05-31",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            }
          ]
        }
      ]
    }
  };
}

export function response(ctx) {
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type);
  }
  
  try {
    // When using Bedrock directly, the response comes back as a string
    const result = JSON.parse(ctx.result);
    return {
      result: result.messages?.[0]?.content?.[0]?.text || "No response generated"
    };
  } catch (error) {
    return {
      result: "Error processing the response: " + error.message
    };
  }
}
