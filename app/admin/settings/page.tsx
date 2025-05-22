"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save, Upload, Trash2 } from "lucide-react"
import Image from "next/image"

// Mock settings data
const initialSettings = {
  general: {
    siteName: "MBA Boutique",
    tagline: "Shopping Fiable & Rapide au Sénégal",
    email: "contact@mbaboutique.sn",
    phone: "+221 78 123 45 67",
    address: "123 Avenue Cheikh Anta Diop, Dakar, Sénégal",
    logo: "/logo.png",
    favicon: "/favicon.ico",
  },
  social: {
    facebook: "https://facebook.com/mbaboutique",
    instagram: "https://instagram.com/mbaboutique",
    twitter: "https://twitter.com/mbaboutique",
    linkedin: "https://linkedin.com/company/mbaboutique",
    youtube: "https://youtube.com/mbaboutique",
  },
  seo: {
    metaTitle: "MBA Boutique | Shopping Fiable & Rapide au Sénégal",
    metaDescription:
      "Achetez vêtements, montres, parfums et plus. Livraison rapide, qualité garantie. Faites confiance à MBA Boutique.",
    googleAnalyticsId: "G-XXXXXXXXXX",
    facebookPixelId: "XXXXXXXXXXXXXXXXX",
  },
  ecommerce: {
    currency: "FCFA",
    taxRate: 18,
    freeShippingThreshold: 25000,
    enableReviews: true,
    enableWishlist: true,
    enableComparisons: false,
  },
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(initialSettings)
  const [activeTab, setActiveTab] = useState("general")

  const handleChange = (section: string, field: string, value: any) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section as keyof typeof settings],
        [field]: value,
      },
    })
  }

  const handleSave = () => {
    // In a real app, you would save the settings to the database
    alert("Settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Site Settings</h1>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" /> Save All Settings
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="seo">SEO & Analytics</TabsTrigger>
          <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic information about your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => handleChange("general", "siteName", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={settings.general.tagline}
                    onChange={(e) => handleChange("general", "tagline", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={settings.general.email}
                      onChange={(e) => handleChange("general", "email", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={settings.general.phone}
                      onChange={(e) => handleChange("general", "phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={settings.general.address}
                    onChange={(e) => handleChange("general", "address", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label>Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={settings.general.logo || "/placeholder.svg"}
                          alt="Logo"
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" /> Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={settings.general.favicon || "/placeholder.svg"}
                          alt="Favicon"
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" /> Upload
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Settings</CardTitle>
              <CardDescription>Configure your social media profiles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input
                    id="facebook"
                    placeholder="https://facebook.com/yourbusiness"
                    value={settings.social.facebook}
                    onChange={(e) => handleChange("social", "facebook", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input
                    id="instagram"
                    placeholder="https://instagram.com/yourbusiness"
                    value={settings.social.instagram}
                    onChange={(e) => handleChange("social", "instagram", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <Input
                    id="twitter"
                    placeholder="https://twitter.com/yourbusiness"
                    value={settings.social.twitter}
                    onChange={(e) => handleChange("social", "twitter", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    placeholder="https://linkedin.com/company/yourbusiness"
                    value={settings.social.linkedin}
                    onChange={(e) => handleChange("social", "linkedin", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="youtube">YouTube</Label>
                  <Input
                    id="youtube"
                    placeholder="https://youtube.com/yourbusiness"
                    value={settings.social.youtube}
                    onChange={(e) => handleChange("social", "youtube", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Analytics Settings</CardTitle>
              <CardDescription>Configure your SEO and analytics settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="metaTitle">Default Meta Title</Label>
                  <Input
                    id="metaTitle"
                    value={settings.seo.metaTitle}
                    onChange={(e) => handleChange("seo", "metaTitle", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="metaDescription">Default Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={settings.seo.metaDescription}
                    onChange={(e) => handleChange("seo", "metaDescription", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="googleAnalyticsId">Google Analytics ID</Label>
                  <Input
                    id="googleAnalyticsId"
                    placeholder="G-XXXXXXXXXX"
                    value={settings.seo.googleAnalyticsId}
                    onChange={(e) => handleChange("seo", "googleAnalyticsId", e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="facebookPixelId">Facebook Pixel ID</Label>
                  <Input
                    id="facebookPixelId"
                    placeholder="XXXXXXXXXXXXXXXXX"
                    value={settings.seo.facebookPixelId}
                    onChange={(e) => handleChange("seo", "facebookPixelId", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ecommerce">
          <Card>
            <CardHeader>
              <CardTitle>E-commerce Settings</CardTitle>
              <CardDescription>Configure your e-commerce settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Input
                      id="currency"
                      value={settings.ecommerce.currency}
                      onChange={(e) => handleChange("ecommerce", "currency", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                    <Input
                      id="taxRate"
                      type="number"
                      value={settings.ecommerce.taxRate}
                      onChange={(e) => handleChange("ecommerce", "taxRate", Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="freeShippingThreshold">Free Shipping Threshold (FCFA)</Label>
                  <Input
                    id="freeShippingThreshold"
                    type="number"
                    value={settings.ecommerce.freeShippingThreshold}
                    onChange={(e) => handleChange("ecommerce", "freeShippingThreshold", Number(e.target.value))}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Switch
                      id="enableReviews"
                      checked={settings.ecommerce.enableReviews}
                      onCheckedChange={(checked) => handleChange("ecommerce", "enableReviews", checked)}
                    />
                    <Label htmlFor="enableReviews">Enable Product Reviews</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      id="enableWishlist"
                      checked={settings.ecommerce.enableWishlist}
                      onCheckedChange={(checked) => handleChange("ecommerce", "enableWishlist", checked)}
                    />
                    <Label htmlFor="enableWishlist">Enable Wishlist</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      id="enableComparisons"
                      checked={settings.ecommerce.enableComparisons}
                      onCheckedChange={(checked) => handleChange("ecommerce", "enableComparisons", checked)}
                    />
                    <Label htmlFor="enableComparisons">Enable Product Comparisons</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
