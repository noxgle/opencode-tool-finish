# opencode-finish

Custom tool for OpenCode that finishes the current task with a summary and success status.

## Installation

Add to your `opencode.json`:

```json
{
  "plugin": ["opencode-finish"]
}
```

OpenCode automatically installs plugin dependencies at runtime.

## Usage

The tool can be called during your conversation:

```
Use the finish tool to mark the task as complete and provide a summary.
```

### Arguments

- `summary` (string, required): A detailed summary or answer to a question depending on the task
- `goal_success` (boolean, required): Whether the task goal was achieved

## Development

```bash
# Install dependencies
bun install

# Build
npm run build
```

## License

MIT