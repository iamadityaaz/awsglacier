import java.io.IOException;

import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.glacier.AmazonGlacierClient;
import com.amazonaws.services.glacier.model.DeleteArchiveRequest;

public class AmazonGlacierDeleteArchive_GettingStarted {

    public static String vaultName = "RAW_VIDEO_FILES";
    public static String archiveId = "PXzNfpTPrUEmjHJ_MN7FPL65FwPNQPor1Diqn4xiADJdB5XgUvyyac8rdE5MbAWMe8fgZR64qQCbAi5Umy3zhrDIWS22xPQDv9V-KXes-TmkgwR_mnYQKSVGCWvULvoTJlCwhDsSng";
    public static AmazonGlacierClient client;
    
    public static void main(String[] args) throws IOException {
        
    	
    	ProfileCredentialsProvider credentials = new ProfileCredentialsProvider();

        client = new AmazonGlacierClient(credentials);
        client.setEndpoint("https://glacier.ap-south-1.amazonaws.com/");        

        try {

            // Delete the archive.
            client.deleteArchive(new DeleteArchiveRequest()
                .withVaultName(vaultName)
                .withArchiveId(archiveId));
            
            System.out.println("Deleted archive successfully.");
            
        } catch (Exception e) {
            System.err.println("Archive not deleted.");
            System.err.println(e);
        }
    }
}