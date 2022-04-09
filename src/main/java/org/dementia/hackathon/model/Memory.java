package org.dementia.hackathon.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class Memory {
    private MultipartFile image;
    private String description;
}
