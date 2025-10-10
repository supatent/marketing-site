# Implement Feature

Implement a feature using the feature implementation plan file.

## Implementation Plan File: $ARGUMENTS

## Execution Process

1. **Load Implementation Plan**
   - Read the specified Implementation Plan file
   - Understand all context and requirements
   - Follow all instructions in the Implementation Plan and extend the research if needed
   - Ensure you have all needed context to implement the Implementation Plan fully
   - Do more web searches and codebase exploration as needed

2. **Ultrathink**\
   - Use the TodoWrite tool to create an initial tasks and refine them as you get more information
   - Each task should be a self-contained unit of work that can be easily executed independently.
   - Break down complex tasks into smaller, manageable steps using your todos tools.
   - Identify implementation patterns from existing code to follow.
   - Use the TodoWrite tool to track the implementation progress.

3. **Execute the plan**
   - Execute tasks using the astro-expert subagent for Astro components, pages, and layouts
   - Implement each task in your todo list independently in a sequential manner
   - IMPORTANT: When calling the astro-expert subagent, favor small tasks over large tasks
   - IMPORTANT: When calling the subagent, be specific about what they should implement and give detailed instructions so they can implement it purely from your instructions
   - IMPORTANT: When calling the subagent for simple tasks (one file, one component, etc.), explicitly state that no further codebase analysis is needed if you are confident of the implementation
   - Validate after each completed task if applicable, favoring many rounds of small validations over one final large validation

4. **Validate**
   - Run `npm run astro check` for TypeScript type checks
   - Run `npm run build` to test the production build
   - Validate component/page changes using the ui-validator subagent
   - When the validation encounters issues, fix them immediately and validate again
   - Re-run until all pass, then move on to the next task

5. **Complete**
   - Ensure all checklist items done
   - Run final validation suite
   - Report completion status
   - Read the plan again to ensure you have implemented everything

6. **Reference the plan**
   - You can always reference the plan again if needed

Note: If validation fails, use error patterns in plan to fix and retry.