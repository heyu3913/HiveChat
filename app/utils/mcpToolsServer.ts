'use server';
import { MCPTool } from '@/types/llm';
import mcpService from '@/app/services/MCPService';

export async function getToolList(serverNames: string[]): Promise<MCPTool[]> {
  if (serverNames.length > 0) {
    const tools = await mcpService.listTools(serverNames);
    return tools;
  } else {
    return [];
  }
}

export async function callMCPTool(tool: MCPTool): Promise<any> {
  const toolInfo = {
    client: tool.serverName,
    name: tool.name,
    args: tool.inputSchema,
  }
  try {
    const resp = await mcpService.callTool(toolInfo)
    return resp
  } catch (e) {
    console.error(`[MCP] Error calling Tool: ${tool.serverName} ${tool.name}`, e)
    return Promise.resolve({
      isError: true,
      content: [
        {
          type: 'text',
          text: `Error calling tool ${tool.name}: ${JSON.stringify(e)}`
        }
      ]
    })
  }
}
