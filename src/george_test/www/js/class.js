/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
		console.log(parentElement);
        var listeningElement = parentElement.querySelector('.load_app');
        var receivedElement = parentElement.querySelector('.loaded_app');

//        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// Get a reference to the root of the chat data.
var messagesRef = new Firebase('https://studywithme.firebaseio.com/messages');
var usersRef = new Firebase('https://studywithme.firebaseio.com/users/');
var classID = localStorage.getItem('classID');
// Add a callback that is triggered for each chat message.
messagesRef.on('child_added', function (snapshot) {
	var message = snapshot.val();

    if(classID == message.classID)
    {
        //$('<div/>').text(message.text).prepend($('<em/>')
          //.text(message.name+' '+message.time+': ')).prependTo($('#messagesDiv'));
        //$('#messagesDiv')[0].scrollTop= $('#messagesDiv')[0].scrollHeight;

        $('#messageList').append("<li class='message'><div class='message_info'>" + 
            "<p class='message_name'>" + message.name + "</p>" + 
            "<p class='message_time'>" + message.time + "</p></div>" +
            "<div class='message_message'>" + message.text + "</div></li>");


    }

});	
