<?php

namespace App\Http\Resources\User;

use DateTime;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'username' => $this->username,
            'name' => $this->name,
            'family' => $this->family,
            'mobile' => $this->mobile ?? '',
            'email' => $this->email ?? '',
            'role' => intval($this->role),
            'isActive' => intval($this->is_active),
        ];
    }
}
