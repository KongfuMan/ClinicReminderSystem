package com.ClinicReminder.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

// WebSockets is a protocol that provides a bi-directional communication channel.
// This means that a browser and web server can maintain real-time comms,
// sending messages back and forth while the connection is open.
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.setApplicationDestinationPrefixes("/app");// define message mappings prefix
        registry.enableSimpleBroker("/topic");// carry msg back to client on destination with prefix of "/topic"
    }

    @Override       //register an endpoint
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // our clients will use this endpoint to connect to the server
        registry.addEndpoint("/connect")   //where server is waiting for connectoins from clients
                .setAllowedOrigins("*"); //Also we allow server to receive requests from any origin
                //.withSockJS(); // not use “clean” websockets, but with SockJS
    }
}
