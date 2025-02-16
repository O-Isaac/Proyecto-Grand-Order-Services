/**
 * @swagger
 * /api/events:
 *   get:
 *     tags:
 *      - Events
 *     description: Return current locate roadmap of the proyecto
 *     responses:
 *       200:
 *         description: Object of all sheets with their statuses and events
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   description: Status Number
 *                 message:
 *                   type: string
 *                   description: Status text, e.g., "Not Found", "Ok", "Internal Error"
 *                 sheets:
 *                   type: array
 *                   description: Array of sheet objects representing roadmap details
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: Name of the sheet, typically representing the year
 *                       events:
 *                         type: array
 *                         description: List of events in the sheet
 *                         items:
 *                           type: object
 *                           properties:
 *                             event:
 *                               type: string
 *                               description: Name of the event
 *                             status:
 *                               type: string
 *                               description: Current status of the event (e.g., "Trabajando", "Planeado")
 *                             lines:
 *                               type: number
 *                               description: Lines have the script
 *                             completed:
 *                               type: number
 *                               descryption: Lines are translated by team
 *                             image:
 *                               type: string
 *                               description: Image Banner of the event
 */

export async function GET() {
  try {
    const req = await fetch(process.env.ENDPOINT!, {
      next: { revalidate: 120 },
    });

    if (!req.ok) {
      return Response.json(
        { status: req.status, message: "Failed to fetch data" },
        { status: req.status }
      );
    }

    const res = await req.json();

    return Response.json(res);
  } catch (error) {
    console.error("Error fetching data:", error);
    return Response.json(
      { status: 500, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
