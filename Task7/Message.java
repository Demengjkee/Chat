
public class Message {

    private String Id;
    private String username;
    private String message;

    public Message() {
        this.ID = "";
        this.username = "";
        this.message = "";
    }

    public Message(String Id, String username, String message) {
        this.Id = Id;
        this.username = username;
        this.message = message;
    }

    public Message(String username, String message) {
        this.message = message;
        this.username = username;
        this.Id = uniqueId();
    }

    public Message(Message message) {
        this.Id = message.getId();
        this.username = message.getUsername();
        this.message = message.getMessage();
    }

    public Message(Object o) {
        Message message = (Message)o;
        this.Id = message.getId();
        this.message = message.getMessage();
        this.username = message.getUsername();
    }

    public String uniqueId() {
        String Id = (Math.random() * Math.random() * 100).toString();
        return Id;
    }

    public String getId() {
        return this.Id;
    }
    public void setId(String id) {
        this.Id = id;
    }

    public String getUsername() {
        return this.username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return this.message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}
