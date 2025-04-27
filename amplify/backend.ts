import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import data from "./data/resource";

/**
 * Define and configure your backend
 */
export default defineBackend({
  auth,
  data: {
    ...data,
    permissions: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          "bedrock:InvokeModel"
        ],
        resources: [
          "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0"
        ]
      })
    ]
  }
});
