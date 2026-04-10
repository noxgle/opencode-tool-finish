import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Finish the current task with a summary and success status",
  args: {
    summary: tool.schema.string().describe("A detailed summary or answer to a question depending on the task"),
    goal_success: tool.schema.boolean().describe("Whether the task goal was achieved"),
  },
  async execute(args, context) {
    return JSON.stringify({
      summary: args.summary,
      goal_success: args.goal_success,
    })
  },
})