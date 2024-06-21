import mongoose from 'mongoose';
type ResourceType = {
    title: string;
    url: string;
    _id?: string; // _id will be present by default in MongoDB documents
};

type VideoUrlType = {
    _480p?: string; // Optional field
    _720p?: string; // Optional field
    _1080p?: string; // Optional field
};

export type LectureType = {
    title: string;
    description: string;
    position: number;
    resources?: ResourceType[]; // Optional array of Resource subdocuments
    videoUrl?: VideoUrlType; // Optional embedded subdocument
    duration: number;
    course: string; 
    isPublished: boolean;
    isPreview: boolean;
    createdAt: Date;
    updatedAt: Date;
};

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
}, { _id: true });

const videoUrlSchema = new mongoose.Schema({
    _480p: { type: String, required: false },
    _720p: { type: String, required: false },
    _1080p: { type: String, required: false },
}, { _id: false });

const lectureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    position: { type: Number, required: true },
    resources: { type: [resourceSchema], required: false }, // Array of Resource subdocuments
    videoUrl: { type: videoUrlSchema, required: false }, // Embedded subdocument
    duration: { type: Number, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    isPublished: { type: Boolean, required: true, default: false },
    isPreview: { type: Boolean, required: true, default: false },
}, { timestamps: true });

export const Lecture = mongoose.model<LectureType>('Lecture', lectureSchema);