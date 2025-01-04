t("/questions")
public class QuestionsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Overrideavax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServ
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        out.println("<!DOCTYPE html>");
        out.println("<html lang=\"en\">");
        out.println("<head>");
        out.println("<meta charset=\"UTF-8\">");
        out.println("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
        out.println("<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">");
        out.println("<link rel=\"stylesheet\" href=\"/A2/1.css\">");
        out.println("<title>Document</title>");
        out.println("</head>");
        out.println("<body>");
        
        out.println("<h3>Here are my questions which I can't find in my life:</h3>");
        out.println("<p>Q.1) What's our purpose in whole life?</p>");
        out.println("<p>Why did God send us on earth to die one day?</p>");
        
        out.println("<label for=\"description1\">Description:</label>");
        out.println("<textarea id=\"description1\" name=\"description1\" rows=\"4\" cols=\"50\" placeholder=\"Enter your description here...\"></textarea>");
        
        out.println("<h4>Drop your questions? (⁠☞⁠ ⁠ಠ⁠_⁠ಠ⁠)⁠☞</h4>");
        out.println("<label for=\"description2\">Description:</label>");
        out.println("<textarea id=\"description2\" name=\"description2\" rows=\"4\" cols=\"50\" placeholder=\"Enter your description here...\"></textarea>");
        
        out.println("<br><input type=\"submit\" value=\"Submit\">");
        out.println("</body>");
        out.println("</html>");
    }
}
